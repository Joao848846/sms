import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsModule } from './sms/sms.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [PrismaModule,SmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
