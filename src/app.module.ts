import { Module } from '@nestjs/common';
import { UserStore } from './store/users.store';
import { UsersController } from './users.controller';

// function connect() {
//   return new Promise<string>((resolve) => {
//     setTimeout(() => {
//       resolve('resolved!');
//     }, 300);
//   });
// }

@Module({
  imports: [],
  // all the controllers should be register here!
  controllers: [UsersController],
  // global dependencies will be register here
  providers: [
    UserStore,
    // {
    //   provide: 'dbConnection',
    //   useFactory: async () => {
    //     const connection = await connect();
    //     return connection;
    //   },
    // },
  ],
})
export class AppModule {}
