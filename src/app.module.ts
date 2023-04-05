import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task_management',
      // NestJS will find your entites and translate database tables to schemas
      // Recognize entity.ts file and reload
      autoLoadEntities: true,
      // Always keep your database schema in sync type TypeORM
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
