import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatInputModule,
    MatChipsModule,
    FormsModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatInputModule,
    MatChipsModule,
    FormsModule
  ]
})
export class SharedModule { }