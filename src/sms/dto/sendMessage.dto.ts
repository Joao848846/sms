import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class SendMessagedto{
    @ApiProperty({
        
    })
    @IsNotEmpty()
    @IsNumber({
        
    }, {
        message: 'Errou ai cuzao'
    })
    codlgn: number
}