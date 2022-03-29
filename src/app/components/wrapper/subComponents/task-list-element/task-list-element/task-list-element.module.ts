import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListElementComponent } from '../task-list-element.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TaskListElementComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TaskListElementComponent
  ]
})
export class TaskListElementModule { }
