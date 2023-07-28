import { Inject, Injectable } from '@nestjs/common';
import { STORE_OPTIONS } from './constants';

@Injectable()
export class CacheStoreService {
  constructor(@Inject(STORE_OPTIONS) storeOptions: typeof STORE_OPTIONS) {
    console.log(storeOptions);
  }
}
