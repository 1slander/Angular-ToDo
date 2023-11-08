import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input('taskProp')
  todo: ToDo;
  @Input()
  index: number;

  constructor() {
    this.todo = new ToDo('', '');
    this.index = 0;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
