import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ParseDatePipe } from 'src/pipes/parse-date.pipe';

@Controller({ path: 'application' })
export class ApplicationController {
  @Get('/:param')
  async get(
    @Param('param', new ParseUUIDPipe({ version: '4' })) param: string,
    @Query('ids', new ParseArrayPipe({ items: Number })) ids: number[],
  ) {
    console.log(typeof param);
    console.log(ids);
    console.log(param);
    return 'Hello World!';
  }

  @Post('/')
  async post(@Body('timestamp', ParseDatePipe) timestamp: Date) {
    console.log(timestamp);
    return { timestamp };
  }
}
