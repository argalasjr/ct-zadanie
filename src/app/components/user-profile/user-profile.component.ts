import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';
import { RestService } from 'src/app/core/services/rest.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public status!: string;
  constructor(private restClient: RestService, private data: DataService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    
    this.restClient.currentFooStatus
    .subscribe((status)=>{
      this.status = status;
      this.cd.markForCheck()
    })
    this.restClient.getFoo('bar1')
    .pipe(
      tap(res => console.log('First result', res)),
      concatMap(() => this.restClient.getFoo('bar2')),
      tap(res => console.log('Second result', res)),
      concatMap(() => this.restClient.getFoo('bar3')),
      tap(res => console.log('Third result', res)),
      )
    .subscribe(() => {
      this.restClient.changeCurrentFooStatus('Loaded')
    });
  }

  ngOnDestroy(): void {

  }

}
