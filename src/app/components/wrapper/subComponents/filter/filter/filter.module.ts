import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule { }
