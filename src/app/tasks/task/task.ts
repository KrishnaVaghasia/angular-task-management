import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type TaskObj } from './task.model';
import { Card } from "../../shared/card/card";
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskObj;

  // @Output() complete = new EventEmitter<string>();

  private taskService = inject(TaskService);

  onCompleteTask(){
    // this.complete.emit(this.task.id);
    this.taskService.removeTask(this.task.id);
  }

}
