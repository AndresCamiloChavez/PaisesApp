import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/interfaz.pais';
import { environment } from '../../../environments/environment.prod';

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
    return this.http.get<Country[]>(this.apiUrl+'/name/'+name).pipe(
      catchError( error => of([]))
    );  
  }

  getPaisPorCapital(nameCapital: string){
    return this.http.get<Country[]>(this.apiUrl+'/capital/'+nameCapital);
  }
  getPaisPorCode(code: string){
    return this.http.get<Country>(this.apiUrl+'/alpha/'+code);
  }
  getPaisesByRegion(region: string){
    const httpParams = new HttpParams().set('fields', 'name,capital,currencies,flag,population,alpha2Code');
    return this.http.get<Country[]>(this.apiUrl+'/regionalbloc/'+region, { params: httpParams});
  }
}
