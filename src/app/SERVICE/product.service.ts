import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient ) { }

   branchDemandPost(demandData:any):Observable<any>{
     console.warn("Service call")
     return this.http.post('http://localhost:8080/api/v1/crms/save-or-update',demandData);

     
 
   }
  }

