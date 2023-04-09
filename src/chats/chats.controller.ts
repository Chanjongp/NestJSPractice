import { Controller, Get, Render, Res, UseGuards } from '@nestjs/common';
import { ChatService } from './chats.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('chats')
@UseGuards(AuthGuard())
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  //   @Get('')
  //   @Render('index')
  //   Home() {
  //     return;
  //   }

  @Get('')
  async Chat() {
    return await this.chatService.getMessages();
  }
}
