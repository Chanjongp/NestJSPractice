import { IsString, MaxLength, MinLength } from 'class-validator';

export class ChatDto {
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  message: string;
}
