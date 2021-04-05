import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmittedDataComponent } from './submitted-data.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SubmittedDataComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SubmittedDataComponent
  ]
})
export class SubmittedDataModule { }
