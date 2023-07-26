import { Controller, Get, Inject } from '@nestjs/common';
import { Subject } from 'rxjs';
import { UserStore } from './store/users.store';

@Controller('/users')
export class UsersController {
  constructor(private users: UserStore) {
    const usersInstance = async () => this.users;
    console.log("users init")
    console.log("🟢 ~ file: users.controller.ts:9 ~ UsersController ~ constructor ~ usersInstance:", usersInstance())
  }
  @Get('/')
  getProfile() {
    return 'success';
  }
}
