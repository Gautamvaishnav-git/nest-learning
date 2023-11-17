import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserStore } from './store/users.store';
import { JobsModule } from './jobs/jobs.module';
import { RouterModule } from '@nestjs/core';
import { ParseDatePipe } from './pipes/parse-date.pipe';

@Module({
  imports: [
    JobsModule,
    RouterModule.register([
      {
        path: 'jobs',
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UserStore, ParseDatePipe],
})
export class AppModule {}
