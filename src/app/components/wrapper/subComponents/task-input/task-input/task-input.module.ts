import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskInputComponent } from '../task-input.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TaskInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TaskInputComponent
  ]
})
export class TaskInputModule { }
