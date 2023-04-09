import { Injectable } from '@nestjs/common';
import { ChatRepository } from './chats.repository';
import { Chat } from './chat.entity';
import { ChatDto } from './dto/chat.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class ChatService {
  constructor(private chatRepository: ChatRepository) {}

  async createMessage(chat: ChatDto, user: User): Promise<void> {
    return await this.chatRepository.createMessage(chat, user);
  }

  async getMessages(): Promise<Chat[]> {
    return await this.chatRepository.getAllChats();
  }
}
