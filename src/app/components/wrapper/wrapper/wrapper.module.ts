import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WrapperComponent } from '../wrapper.component';
import { DoneListModule } from '../subComponents/done-list/done-list/done-list.module';
import { FilterModule } from '../subComponents/filter/filter/filter.module';
import { StatisticsModule } from '../subComponents/statistics/statistics/statistics.module';
import { TaskInputModule } from '../subComponents/task-input/task-input/task-input.module';
import { ToDoListModule } from '../subComponents/to-do-list/to-do-list/to-do-list.module';



@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DoneListModule,
    FilterModule,
    StatisticsModule,
    TaskInputModule,
    ToDoListModule
  ],
  exports: [
    WrapperComponent
  ]
})
export class WrapperModule { }
