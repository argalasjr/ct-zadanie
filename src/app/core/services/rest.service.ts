import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private readonly BASE_URL = 'https://postman-echo.com';



  private httpOptions =  {  
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
    params: new HttpParams()
  };

  constructor(private http: HttpClient) { }


  submitForm(formBody: any): Observable<any> {
    console.log(this.httpOptions)
    const url = `${this.BASE_URL}/post`;
    return this.http.post<any>(url,formBody,this.httpOptions)
      .pipe(
        tap(_ => console.log('submited form')),
        catchError(this.handleError<any>('getFoo', null))
      );
  }

  getFoo(foo: string): Observable<any> {
    this.httpOptions.params = new HttpParams()
    //this.httpOptions.params.append('foo', fooValue);
    console.log(this.httpOptions)
    const url = `${this.BASE_URL}/get`;
    return this.http.get<any>(url,{params: {foo}})
      .pipe(
        tap(_ => console.log('fetched postman echo foo ',foo)),
        catchError(this.handleError<any>('getFoo', null))
      );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
     private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.log(error.message); // log to console instead
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}