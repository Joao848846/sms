import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { SendMessagedto } from "./dto/sendMessage.dto";

@Injectable()
export class Updatecodlgnservice {
  constructor (private prisma: PrismaService) {

  }
  async execute(id:string, data:SendMessagedto) {

    const update = await this.prisma.user.update({data:{codlgn:data.codlgn},where:{id}}) 
    return update
  }

} // serviço, controller e no final sms.module
