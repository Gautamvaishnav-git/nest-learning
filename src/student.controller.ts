import { UserStore } from './store/users.store';
import { Controller } from '@nestjs/common';

@Controller()
export class Student {
  constructor(private users: UserStore) {
    console.log(users);
    console.log('students init!');
  }
}
