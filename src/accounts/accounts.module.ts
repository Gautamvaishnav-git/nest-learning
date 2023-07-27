import { Module } from '@nestjs/common';
import { AccountsController } from './controllers/accounts.controller';
import { AccountsServices } from './services/accounts.service';

@Module({
  controllers: [AccountsController],
  providers: [AccountsServices],
  imports: [],
  exports: [AccountsServices],
})
export class AccountModule {}
