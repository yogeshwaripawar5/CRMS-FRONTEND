import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpAddressService } from './ip-address.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoViewService {

  constructor(private http: HttpClient,private ipService:IpAddressService) { }

  private baseUrl = 'http://'+ this.ipService.getIPAddress()+'/api/v1/crms';

  getBranchDemandList(region:string):Observable<any>{

    console.log("GET RETENTION LIMIT SERVICE ");
  
    console.log('BASIC URL '+this.baseUrl+'/get/'+region);

    return this.http.get<any>(`${this.baseUrl}/get/${region}`);
   }

// *********************************************************************************************************************
   getIndividualRoSummary(region:string):Observable<any>{

    console.log("GET INDIVIDUAL RO SUMMARY  SERVICE ");
  
    console.log('BASIC URL '+this.baseUrl+'/get/individual-ro-summary/'+region);

    return this.http.get<any>(`${this.baseUrl}/get/individual-ro-summary/${region}`);
   }


}
