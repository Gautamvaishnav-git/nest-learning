import { Global, Module } from '@nestjs/common';
import { Users } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Global()
@Module({
  controllers: [Users],
  providers: [UsersService],
  exports: [UsersService],
  imports: [],
})
export class UsersModule {}
