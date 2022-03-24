import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from '../to-do-list.component';
import { TaskListElementModule } from '../../task-list-element/task-list-element/task-list-element.module';



@NgModule({
  declarations: [
    ToDoListComponent
  ],
  imports: [
    CommonModule,
    TaskListElementModule
  ],
  exports: [
    ToDoListComponent
  ]
})
export class ToDoListModule { }
