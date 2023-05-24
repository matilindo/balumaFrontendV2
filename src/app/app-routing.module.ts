import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelModule } from './panel/panel.module';
import { ErrorPageComponent } from './panel/error-page/error-page.component';
import { ValidarTokenGuard } from './auth/guards/validar-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
 
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: 'auth'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
