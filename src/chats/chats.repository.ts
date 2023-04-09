import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Chat } from './chat.entity';
import { ChatDto } from './dto/chat.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class ChatRepository extends Repository<Chat> {
  constructor(private dataSource: DataSource) {
    super(Chat, dataSource.createEntityManager());
  }

  async createMessage(chatDto: ChatDto, user: User): Promise<void> {
    const { message } = chatDto;

    const chat = await this.create({
      message,
      user,
    });

    await this.save(chat);
  }

  async getAllChats() {
    return await this.find();
  }

  async saveChat() {
    //
  }
}
