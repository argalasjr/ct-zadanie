import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  public submitted!: boolean;
  public profileForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null),
    });
  }
  public onSubmit(): void {
    this.submitted = true
    console.log(this.profileForm.getRawValue())
  }

  public onReset(): void {
    this.submitted = false;
    this.profileForm.reset()
  }

  public checkValidation(controlName: string): boolean {
    return this.profileForm.controls[controlName].invalid && 
    (this.profileForm.controls[controlName].touched || this.profileForm.controls[controlName].dirty)  
  }


}
