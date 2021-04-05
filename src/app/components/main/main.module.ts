import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { UserProfileModule } from '../user-profile/user-profile.module';
import { SubmittedDataModule } from '../submitted-data/submitted-data.module';
import { ProfileFormModule } from '../profile-form/profile-form.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    SubmittedDataModule,
    ProfileFormModule,
    UserProfileModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
