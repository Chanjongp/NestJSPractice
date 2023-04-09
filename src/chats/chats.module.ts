import { Module } from '@nestjs/common';
import { ChatController } from './chats.controller';
import { ChatGateway } from './chats.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './chat.entity';
import { AuthModule } from 'src/auth/auth.module';
import { ChatService } from './chats.service';
import { ChatRepository } from './chats.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Chat]), AuthModule],
  controllers: [ChatController],
  providers: [ChatGateway, ChatService, ChatRepository],
})
export class ChatsModule {}
