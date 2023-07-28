import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AccountModule } from './accounts/accounts.module';
import { CacheStoreModule } from './cache-store/cache-store.module';

@Module({
  imports: [UsersModule, AccountModule, CacheStoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
