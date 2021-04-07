import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { concatMap, tap } from 'rxjs/operators';;
import { RestService } from 'src/app/core/services/rest.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public status!: string;
  constructor(private restClient: RestService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.restClient.getFoo('bar1')
    .pipe(
      tap(
        res => console.log('First result', res)),
      concatMap(() => this.restClient.getFoo('bar2')),
      tap(res => console.log('Second result', res)),
      concatMap(() => this.restClient.getFoo('bar3')),
      tap(res => console.log('Third result', res)),
      )
    .subscribe(() => {
      this.status = "Loaded";
      this.cd.markForCheck();
    },
    ()=>{
      this.status = "Error";
      this.cd.markForCheck()
    });
  }
}
