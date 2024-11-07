import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SendMessagedto } from './dto/sendMessage.dto';
import { Updatecodlgnservice } from './update.service';

@Controller("sms")
export class SmsController {
  constructor(private readonly smsService: SmsService, private update: Updatecodlgnservice) {}

  @Post()
  SendMessage(@Body () data:SendMessagedto) {
    return this.smsService.createUser(data);
  }


@Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: SendMessagedto) {
    return this.update.execute(id, data);
  }

}