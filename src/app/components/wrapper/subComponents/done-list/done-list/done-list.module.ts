import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoneListComponent } from '../done-list.component';
import { TaskListElementModule } from '../../task-list-element/task-list-element/task-list-element.module';



@NgModule({
  declarations: [
    DoneListComponent
  ],
  imports: [
    CommonModule,
    TaskListElementModule
  ],
  exports: [
    DoneListComponent
  ]
})
export class DoneListModule { }
