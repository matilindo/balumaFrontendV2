import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../panel/error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'home',
          component: HomeComponent
        },
        {
            path: 'admin',
            component: AdminComponent
          },
        {
          path: '404',
          component: ErrorPageComponent
        },
        {
          path: '**',
          redirectTo: 'login'
        }
      ]
    }
  ]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class PanelRoutingModule { }
