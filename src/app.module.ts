import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStore } from './store/users.store';
import { Student } from './student.controller';

@Module({
  imports: [],
  controllers: [UsersController, Student],
  providers: [UserStore],
})
export class AppModule {}
