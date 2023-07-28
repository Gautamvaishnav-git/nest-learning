import { Injectable } from '@nestjs/common';
import { CacheStoreService } from 'src/cache-store/cache-store.service';

@Injectable()
export class AccountsServices {
  constructor(private cacheService: CacheStoreService) {}
}
