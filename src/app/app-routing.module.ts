import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { MainModule } from './components/main/main.module';
import { ProfileFormModule } from './components/profile-form/profile-form.module';
import { SubmittedDataModule } from './components/submitted-data/submitted-data.module';
import { UserProfileModule } from './components/user-profile/user-profile.module';


const routes: Routes = [];

@NgModule({
  imports: [
    MainModule,
    RouterModule.forRoot([
      
      {
        path: 'login',
        component: LoginComponent
        //loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
      },
      // {
      //   path: '',
      //   redirectTo: 'login',
      //   pathMatch: 'full'
      // },
      {
        path: '',
        component: MainComponent,
      },
      // {
      //   path: '**',
      //   component: LoginComponent
      // },
     
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
