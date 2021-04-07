import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-submitted-data',
  templateUrl: './submitted-data.component.html',
  styleUrls: ['./submitted-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmittedDataComponent implements OnInit {

  public submittedDataForm!: any;
  public dataSub: any;
  constructor(private dataService: DataService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dataService.submittedData.subscribe(
      (result) => {
        this.submittedDataForm = result;
        this.cd.markForCheck();
      }
    );
  }

}
