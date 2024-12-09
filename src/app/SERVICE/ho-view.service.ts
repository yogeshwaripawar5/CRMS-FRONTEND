import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpAddressService } from './ip-address.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoViewService {

  constructor(private http: HttpClient,private ipService:IpAddressService) { }

  private baseUrl = 'http://'+ this.ipService.getIPAddress()+'/api/v1/crms';



   
  getRegionWiseSummaryList():Observable<any>{

    console.log("GET REGION WISE SUMMARY LIST SERVICE ");
  
    console.log('BASIC URL '+this.baseUrl+'/get/region-summary');

    return this.http.get<any>(`${this.baseUrl}/get/region-summary`);
   }

   //*************************************************************************************************************/

   getBankSummary():Observable<any>{

    console.log("GET BANK SUMMARY  SERVICE ");
  
    console.log('BASIC URL '+this.baseUrl+'/get/bank-summary');

    return this.http.get<any>(`${this.baseUrl}/get/bank-summary`);
   }


}
