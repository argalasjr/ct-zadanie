import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private readonly _submittedDataFormSource = new BehaviorSubject<any>(undefined);
  public submittedData = this._submittedDataFormSource.asObservable()


  
  constructor() { }
  
  public changeSubmittedData(data: any): void {
    this._submittedDataFormSource.next(data);
  }
}
