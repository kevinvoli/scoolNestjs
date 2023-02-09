import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello() {
    return this.appService.getHello();
  }

  @Post()
  async createUser(@Body() data: any) {
    console.log(data);
    return { date: data };
  }
}
