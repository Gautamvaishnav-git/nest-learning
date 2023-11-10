import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class Bank {
  constructor(@Inject('STORE_OPTION') storeOpt: { store: string }) {
    console.log(
      '🟢 ~ file: bank.service.ts:7 ~ Bank ~ constructor ~ storeOpt.store:',
      storeOpt,
    );
    console.log('user service injected');
  }
}
