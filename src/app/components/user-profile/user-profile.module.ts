import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule } from '@angular/router';
import { SubmittedDataModule } from '../submitted-data/submitted-data.module';
import { ProfileFormModule } from '../profile-form/profile-form.module';



@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    SubmittedDataModule,
    ProfileFormModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserProfileModule { }
