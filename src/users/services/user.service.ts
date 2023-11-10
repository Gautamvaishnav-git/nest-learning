import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@Inject('STORE_OPTION') storeOpt: { store: string }) {
    console.log(
      '🟢 ~ file: user.service.ts:7 ~ UsersService ~ constructor ~ storeOpt.store:',
      storeOpt,
    );
  }
}
