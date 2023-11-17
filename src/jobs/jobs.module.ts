import { Module } from '@nestjs/common';
import { ApplicationController } from './controllers/application.controller';

@Module({
  controllers: [ApplicationController],
  providers: [],
})
export class JobsModule {}
