import { TaskStatus } from '../task.model';
export declare class CreateTaskDto {
    title: string;
    description: string;
}
export declare class UpdateTaskStatusDto {
    status: TaskStatus;
}
