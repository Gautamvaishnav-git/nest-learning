import { Injectable, Scope } from '@nestjs/common';

export interface IUser {
  id: number;
  name: string;
  age: number;
}

@Injectable({
  scope: Scope.DEFAULT,
})
export class UserStore {
  private store = new Map<number, IUser>();
  constructor() {
    console.log('user dependency injected!');
  }

  addUser(user: IUser) {
    this.store.set(user.id, user);
    return 'success!';
  }

  getUser(id: number) {
    return this.store.get(id);
  }

  getUsers() {
    const users = Array.from(this.store).map(([, user]) => user);
    return users;
  }

  updateUser(user: IUser) {
    this.store.set(user.id, user);
  }

  delete(id: number) {
    this.store.delete(id);
  }
}
