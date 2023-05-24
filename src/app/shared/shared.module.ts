import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SidebarComponent,
  ],
  exports: [
    SidebarComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
