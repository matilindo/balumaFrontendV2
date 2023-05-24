import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from '../material/material.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PanelRoutingModule } from './panel-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PanelRoutingModule
  ],
  exports:[
    HomeComponent,
    AdminComponent,
    ErrorPageComponent
    
  ]
})
export class PanelModule { }
