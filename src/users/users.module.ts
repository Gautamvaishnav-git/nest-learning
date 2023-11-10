import { Global, Module } from '@nestjs/common';
import { UsersController } from './controllers/user.controller';
import { UsersService } from './services/user.service';
import CacheStoreModule from 'src/cache-store/cache-store.module';

@Global()
@Module({
  imports: [CacheStoreModule.forFeature('maria')],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UserModule {
  constructor() {
    console.log('user module init!');
  }
}
