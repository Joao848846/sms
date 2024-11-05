import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SmsService {
  constructor (private prisma: PrismaService) {

  }
  async createUser(): Promise<any> {
    const user = await this.prisma.user.create({data:{codlgn: 7310}})
    return user
  }
}
