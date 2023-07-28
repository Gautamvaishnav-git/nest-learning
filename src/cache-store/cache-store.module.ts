import { Module } from '@nestjs/common';
import { CacheStoreService } from './cache-store.service';
import { StoreType } from './enums/StoreType.enum';
import { STORE_OPTIONS } from './constants';

const DEFAULT_STORE_NAME = 'DEFAULT_CACHE';
const DEFAULT_STORE_TYPE = StoreType.MEMORY;

@Module({
  providers: [
    CacheStoreService,
    {
      provide: STORE_OPTIONS,
      useValue: {
        storeName: DEFAULT_STORE_NAME,
        storeType: DEFAULT_STORE_TYPE,
      },
    },
  ],
  exports: [CacheStoreService],
})
export class CacheStoreModule {}
