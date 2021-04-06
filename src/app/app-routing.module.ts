import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { MainModule } from './components/main/main.module';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [];

@NgModule({
  imports: [
    MainModule,
    RouterModule.forRoot([    
      // {
      //   path: '',
      //   redirectTo: '',
      //   pathMatch: 'full'
      // },
      {
        path: '',
        children: [
          {
            path: 'login',
            component: LoginComponent
            //loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
          },
          {
            path: '',
            component: MainComponent,
            data: {requiresLogin: true},
            canActivate: [AuthGuard]
            //loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
          },
          {
            path: '**',
            component: MainComponent
          },
        ]
      },

     
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
