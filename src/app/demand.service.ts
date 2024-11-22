import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BranchDemandDetail } from './MODEL/branch-demand-detail';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  constructor(private http: HttpClient ) { }

  branchDemandPost(demandData:BranchDemandDetail):Observable<any>{
    console.warn("Service call")
    console.log(' Demand data on service get '+demandData);
    return this.http.post('http://localhost:8080/api/v1/crms/save-or-update',demandData);

    

  }
}
