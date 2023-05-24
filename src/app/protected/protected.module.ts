import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MaterialModule
  ]
})
export class ProtectedModule { }
