import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from './profile-form.component';



@NgModule({
  declarations: [ProfileFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileFormComponent
  ]
})
export class ProfileFormModule { }
