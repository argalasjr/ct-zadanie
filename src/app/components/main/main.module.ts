import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { UserProfileModule } from '../user-profile/user-profile.module';
import { SubmittedDataModule } from '../submitted-data/submitted-data.module';
import { ProfileFormModule } from '../profile-form/profile-form.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from '../login/login.module';
import { AuthGuard } from 'src/app/core/guards/auth.guard';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SubmittedDataModule,
    ProfileFormModule,
    UserProfileModule,
    LoginModule
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
