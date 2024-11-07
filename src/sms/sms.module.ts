import { Module } from '@nestjs/common';
import { SmsController } from './sms.controller';
import { SmsService } from './sms.service';
import { Updatecodlgnservice } from './update.service';


@Module({
  imports: [],
  controllers: [SmsController],
  providers: [SmsService, Updatecodlgnservice],
})
export class SmsModule {}
