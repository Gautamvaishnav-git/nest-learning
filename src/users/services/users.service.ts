import { Injectable } from '@nestjs/common';
import { CacheStoreService } from 'src/cache-store/cache-store.service';

@Injectable()
export class UsersService {
  constructor(private cacheService: CacheStoreService) {}
}
