import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(createTaskDto: CreateTaskDto): Task {
    // destrucutre with ECMA6 Feature
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;

    // define a temporary array to hold the result
    let tasks = this.getAllTasks();

    // do seomthing with status
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    // do something with search
    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }

        return false;
      });
    }

    // return final result
    return tasks;
  }

  getTaskById(id: string): Task {
    // try to get task
    const found = this.tasks.find((task) => task.id === id);
    // if not found, throw an error (404 not found)
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    // otherwise, return the found task
    return found;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  deleteTask(id: string): boolean {
    const found = this.getTaskById(id);
    const taskIndex = this.tasks.findIndex((task) => task.id === found.id);
    if (taskIndex >= 0) {
      this.tasks.splice(taskIndex, 1);
      return true;
    }
  }
}
