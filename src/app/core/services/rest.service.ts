import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly BASE_URL = 'https://postman-echo.com';

  constructor(private http: HttpClient) { }

  submitForm(formBody: any): Observable<any> {
    const url = `${this.BASE_URL}/post`;
    return this.http.post<any>(url,formBody)
  }

  getFoo(foo: string): Observable<any> {
    const url = `${this.BASE_URL}/get`;
    return this.http.get<any>(url,{params: {foo}})
  }

}