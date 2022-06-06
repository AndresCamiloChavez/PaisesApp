import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/interfaz.pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  getPaisByName(name: string): Observable<Country[]>{
    // return this.http.get(this.apiUrl+'/name/'+name).pipe(
    //   // of es una función que genera observables
    //     catchError(error => of([]))
    // );
    return this.http.get<Country[]>(this.apiUrl+'/name/'+name);  
  }

  getPaisPorCapital(nameCapital: string){
    return this.http.get<Country[]>(this.apiUrl+'/capital/'+nameCapital);
  }
  getPaisPorCode(code: string){
    return this.http.get<Country>(this.apiUrl+'/alpha/'+code);
  }
}
