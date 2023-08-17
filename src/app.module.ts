import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStore } from './store/users.store';
import { Student } from './student.controller';

@Module({
  imports: [],
  // all the controllers should be register here!
  controllers: [UsersController, Student],
  // global dependencies will be register here
  // providers: [{ provide: UserStore, useClass: UserStore }],

  // another way to injection
  // in this method we don't need to create an object and set provide and userCLass property
  providers: [UserStore],
})
export class AppModule {}
