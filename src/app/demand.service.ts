import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BranchDemandDetail } from './MODEL/branch-demand-detail';
import { IpAddressService } from './SERVICE/ip-address.service';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  constructor(private http: HttpClient,private ipService:IpAddressService ) { }


  private baseUrl = 'http://'+ this.ipService.getIPAddress()+'/api/v1/crms';


  branchDemandPost(demandData:BranchDemandDetail):Observable<any>{
    console.warn("Service call")
    console.log(' Demand data on service get '+demandData);
    return this.http.post(this.baseUrl+'/save-or-update',demandData);

    

  }

  //***************************************************************************************************** */

  branchRetentionLimit(brcode:string):Observable<any>{

    console.log("GET RETENTION LIMIT SERVICE ");
  
    console.log('BASIC URL '+this.baseUrl+'/cash-retention-limit/get/'+brcode);

    return this.http.get<any>(`${this.baseUrl}/cash-retention-limit/get/${brcode}`);
   }


   //************************************************************************************************ */

   branchPreviousDayCashOnHand(brcode:string):Observable<any>{

    console.log("GET PREVIOUS DAY CASH ON HAND  SERVICE ");
  
    console.log('BASIC URL '+this.baseUrl+'/cashonhand/get/{brcode}/'+brcode);

    return this.http.get<any>(`${this.baseUrl}/cashonhand/get/${brcode}`);
   }

   //******************************************************************************************************* */

   bankHavingCurrentAcWithOtherBank(brcode:string):Observable<any>{

    console.log("GET BANK HAVING CURRENT AC WITH OTHER BANK SERVICE ");
  
    console.log('BASIC URL '+this.baseUrl+'/otherbank/get/{brcode}/'+brcode);

    return this.http.get<any>(`${this.baseUrl}/otherbank/get/${brcode}`);
    // return this.http.get<any>(`${this.baseUrl}/otherbank/get/4112`);

   }

// **************************************************************************************************************
   soiledCurrencyDetails(brcode:string):Observable<any>{

    console.log("GET BRANCH SOILED CURRENCY SERVICE ");
  
    console.log('BASIC URL '+this.baseUrl+'/soiled-currency/get/{brcode}/'+brcode);

    return this.http.get<any>(`${this.baseUrl}/soiled-currency/get/${brcode}`);
    // return this.http.get<any>(`${this.baseUrl}/soiled-currency/get/4112`);

   }


   // **************************************************************************************************************
   branchDemandDetail(brcode:string):Observable<any>{

    console.log("GET BRANCH DEMAND SERVICE ");
  
    console.log('BASIC URL '+this.baseUrl+'/get/branch/{brcode}/'+brcode);

    // return this.http.get<any>(`${this.baseUrl}/soiled-currency/get/${brcode}`);
    return this.http.get<any>(`${this.baseUrl}/get/branch/${brcode}`);

   }

   // **************************************************************************************************************
   branchBlockDetail(brcode: string): Observable<any> {
    console.log("GET BRANCH BLOCK SERVICE ");
    console.log('BASIC URL ' + this.baseUrl + '/branch-master/get/' + brcode);

    return this.http.get<string>(`${this.baseUrl}/branch-master/get/${brcode}`,{responseType:'text' as 'json'})
    
  }

}
