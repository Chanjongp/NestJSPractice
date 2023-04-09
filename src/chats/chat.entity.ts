import { Exclude } from 'class-transformer';
import { MaxLength } from 'class-validator';
import { User } from 'src/auth/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(20)
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne((_type) => User, (user) => user.chats, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
