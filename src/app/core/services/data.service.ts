import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private readonly _submittedDataSource = new BehaviorSubject<any>(undefined);
  public submittedData = this._submittedDataSource.asObservable()
  
  constructor() { }
  
  public changeSubmittedData(data: any): void {
    this._submittedDataSource.next(data);
  }
}
