import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { RestService } from 'src/app/core/services/rest.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormComponent implements OnInit {
   
  @Input() color?: string;
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter<any>();
  public submitted!: boolean;
  public profileForm: FormGroup;
  constructor(private restClient: RestService, private dataService: DataService, private cd : ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.color)
    this.profileForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null),
    });
  }
  public onSubmit(): void {
   
    this.restClient.submitForm(this.profileForm.getRawValue())
    .subscribe((result)=>{
      console.log(result);
      this.submitted = true      
      this.dataService.changeSubmittedData(this.profileForm.getRawValue());
      this.cd.markForCheck()
      this.profileForm.reset()
    });
  }

  public resetForm(): void {
    this.submitted = false;
    this.dataService.changeSubmittedData(undefined);
  }

  public checkValidation(controlName: string): boolean {
    return this.profileForm.controls[controlName].invalid && 
    (this.profileForm.controls[controlName].touched || this.profileForm.controls[controlName].dirty)  
  }


}
