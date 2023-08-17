import { Controller, Get } from '@nestjs/common';
import { IUser, UserStore } from './store/users.store';

@Controller('/users')
export class UsersController {
  constructor(private users: UserStore) {
    console.log(this.users);
    console.log('users init');
  }
  @Get('/')
  getProfile(): IUser {
    this.users.addUser({ age: 13, id: 2, name: 'gautam vaishnav' });
    const user = this.users.getUser(2);
    return user;
  }

  @Get('/list')
  getUsers(): IUser[] {
    return this.users.getUsers();
  }
}
