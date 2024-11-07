import { Module } from '@nestjs/common';
import { SmsModule } from './sms/sms.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [PrismaModule,SmsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
