import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  public profileForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    });
  }
  public onSubmit(): void {
    // this.isLoggedIn = true;
    // localStorage.setItem('login', JSON.stringify(this.isLoggedIn));
    //this.router.navigate(['/']);
  }


}
