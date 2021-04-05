import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmittedDataComponent } from './submitted-data.component';



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
