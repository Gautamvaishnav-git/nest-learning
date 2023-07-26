import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStore } from './store/users.store';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserStore],
})
export class AppModule {}
