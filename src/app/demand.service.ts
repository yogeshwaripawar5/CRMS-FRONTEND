import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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


  branchRetentionLimit(brcode:string):Observable<any>{

    console.log("GET RETENTION LIMIT SERVICE ");
  
    console.log('BASIC URL '+this.baseUrl+'/cash-retention-limit/get/'+brcode);

    return this.http.get<any>(`${this.baseUrl}/cash-retention-limit/get/${brcode}`);
   }

}
