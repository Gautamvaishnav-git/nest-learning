import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AccountModule } from './accounts/accounts.module';

@Module({
  imports: [UsersModule, AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
