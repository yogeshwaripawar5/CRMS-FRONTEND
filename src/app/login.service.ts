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


  private getDefaultUser =
  'http://10.15.51.23:8099/v1/api/login/get-default-user'; // first userId ,password  // msso password


  getUserData1(userId: string): Observable<any> {
    // console.log('Called GetUser Service' + userId);
    const params=new HttpParams()
    .set('userId',userId);
     return this.http.get<any>(`${this.getDefaultUser}` ,{params});
  }


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
  return this.http.get<string>(`${this.baseUrl}/checkCredential`, {    params: params
    // Telling Angular to expect plain text
  });

  }



    // Fetch credentials (mran, ran, u)
//     getCredentials(): Observable<any> {
//       return this.http.get<any>('${this.baseUrl}/checkCredential`);
//     }


getCredentialDetail(mran: number, ran: number, u: string):Observable<any>{

  const params = new HttpParams()
  .set('mran', mran.toString())
  .set('ran', ran.toString())
  .set('u', u);

  console.log('parameter'+params);
  console.log("GET USER ALL DETAILS ");
  
  console.log('BASIC URL '+this.baseUrl+'/checkCredential/get');

  return this.http.get<any>(`${this.baseUrl}/checkCredential/get`,{    params: params
    // Telling Angular to expect plain text
  });

}

}
