import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpAddressService } from './ip-address.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private ipService:IpAddressService) { }

  private baseUrl = 'http://'+ this.ipService.getIPAddress()+'/api/v1/crms';

  validateSession(): Observable<any>  {

    // const data = new HttpParams{pfNo, mran, ran };

    console.log("GET RETENTION LIMIT SERVICE ");
  
    console.log('BASIC URL '+this.baseUrl+'/checkCredential/get');

    return this.http.get<any>(`${this.baseUrl}/checkCredential/get`);


    
  }
}
