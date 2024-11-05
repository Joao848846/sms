import { Controller, Get } from '@nestjs/common';
import { SmsService } from './sms.service';

@Controller("sms")
export class SmsController {
  constructor(private readonly appService: SmsService) {}

  @Get()
  getHello() {
    return this.appService.createUser();
  }
}
