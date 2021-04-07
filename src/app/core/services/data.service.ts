import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private readonly submittedDataFormSource = new BehaviorSubject<any>(undefined);
  public submittedData = this.submittedDataFormSource.asObservable();

  public changeSubmittedData(data: any): void {
    this.submittedDataFormSource.next(data);
  }
}
