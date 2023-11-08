import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/to-do.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent {
  taskList: ToDo[];
  taskDoing: ToDo[];
  taskCompleted: ToDo[];
  taskName: string;
  status: string;

  constructor() {
    this.taskList = [];
    this.taskDoing = [];
    this.taskCompleted = [];
    this.taskName = '';
    this.status = 'Pending';
  }

  addTask(): void {
    const newTask = new ToDo(this.taskName, this.status);
    this.taskList.push(newTask);
    this.taskName = '';
  }
  updateStatus(item: ToDo) {
    console.log(item.status);
    if (item.status === 'Pending') {
      item.status = 'Doing';
      console.log(item.status);
    } else if (item.status === 'Doing') {
      item.status = 'Done';
    }
  }

  deleteTask(item: ToDo) {
    const updatedTaskList = this.taskList.filter(
      (task) => task.taskName !== item.taskName
    );

    this.taskList = updatedTaskList;

    return this.taskList;
  }
}
