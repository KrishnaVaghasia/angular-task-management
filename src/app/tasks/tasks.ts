import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { Title } from '@angular/platform-browser';
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required:true}) userId!: string;
  @Input() name?: string;

 constructor(private taskService:TaskService){
 }

  isAddingTask = false;

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }


}
