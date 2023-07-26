import { Injectable, Module } from '@nestjs/common';
import { UsersController } from './users.controller';

const getOrganization = async (mode: Config) => {
  if (mode.envType === 'DEV') {
    return new Promise((resolve) =>
      resolve(setTimeout(() => console.log('DEV'), 100)),
    );
  } else {
    return new Promise((resolve) =>
      resolve(setTimeout(() => console.log('PROD'), 100)),
    );
  }
};

@Injectable()
class Config {
  envType: 'DEV' | 'PROD';
  constructor() {
    this.envType = 'DEV';
  }
}

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    {
      provide: 'DYNAMIC',
      useFactory: async (options: Config) => {
        console.log(options);
        return await getOrganization(options);
      },
      inject: [
        Config,
        { token: 'IS_DEV', optional: true },
        { token: 'DB_OPTIONS', optional: true },
      ],
    },
    Config,
    {
      provide: 'DB_OPTIONS',
      useValue: { name: 'Connection', password: 'secret$($*' },
    },
  ],
})
export class AppModule {}
