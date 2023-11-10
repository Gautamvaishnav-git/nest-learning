import { Module } from '@nestjs/common';
import { UsersController } from './users/controllers/user.controller';
import { UsersService } from './users/services/user.service';
@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
