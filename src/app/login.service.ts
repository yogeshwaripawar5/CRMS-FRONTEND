import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpAddressService } from './SERVICE/ip-address.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private ipService:IpAddressService ) { }

  private baseUrl = 'http://'+ this.ipService.getIPAddress()+'/api/user';


  getUserData(mran: number, ran: number, u: string):Observable<string>{
    console.log("GET RETENTION LIMIT SERVICE ");
  
    console.log('BASIC URL '+'http://localhost:8080/api/user/checkCredential?u=%27Maya%27?mran=5?ran=2');

    // return this.http.get<any>(`${this.baseUrl}/checkCredential`);


    const params = new HttpParams()
    .set('mran', mran.toString())
    .set('ran', ran.toString())
    .set('u', u);

    console.log('parameter'+params);

  // Send GET request
  // return this.http.get<string>('http://localhost:8080/api/user/checkCredential?u=%27Maya%27?mran=5?ran=2');
  return this.http.get<string>(`${this.baseUrl}/checkCredential`, {    params: params,
    responseType: 'text' as 'json'  // Telling Angular to expect plain text
  });

  }



    // Fetch credentials (mran, ran, u)
//     getCredentials(): Observable<any> {
//       return this.http.get<any>('${this.baseUrl}/checkCredential`);
//     }

}
