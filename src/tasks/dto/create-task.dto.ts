import { TaskStatus } from '../task.model';

export class CreateTaskDto {
  title: string;
  description: string;
}

export class UpdateTaskStatusDto {
  status: TaskStatus;
}