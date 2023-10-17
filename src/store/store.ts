import { Injectable } from '@nestjs/common';

interface IUser {
  id: number;
  name: string;
  age: number;
}

@Injectable()
export class Store {
  private store = new Map<number, IUser>();
  constructor() {
    console.log('store init');
  }
  addUser(user: IUser) {
    this.store.set(user.id, user);
    return 'success!';
  }

  getUser(id: number) {
    return this.store.get(id);
  }

  getUsers() {
    return Array.from(this.store).map((_, user) => user);
  }

  updateUser(user: IUser) {
    this.store.set(user.id, user);
  }

  delete(id: number) {
    this.store.delete(id);
  }
}
