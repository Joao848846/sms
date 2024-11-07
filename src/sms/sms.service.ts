import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SendMessagedto } from './dto/sendMessage.dto';

@Injectable()
export class SmsService {
  constructor (private prisma: PrismaService) {

  }
  async createUser(data:SendMessagedto): Promise<any> {
    const user = await this.prisma.user.create({data:{codlgn:data.codlgn}})
    return user
  }
}



