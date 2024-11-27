import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BranchDemandDetail } from 'src/app/MODEL/branch-demand-detail';
import { RoViewService } from 'src/app/SERVICE/ro-view.service';

@Component({
  selector: 'app-ro-view',
  templateUrl: './ro-view.component.html',
  styleUrls: ['./ro-view.component.css']
})
export class RoViewComponent {

  branchDemandDetail = {} as BranchDemandDetail;

  branchDemandDetailArray:BranchDemandDetail[]=[];
  cashRetentionLimit: any;

  constructor(private roViewService: RoViewService,private router:Router){}
  region:string='AURANGABAD';

  ngOnInit(): void {
  
    this.getBranchDemandList();
   
  }



  getBranchDemandList(){

    // this.roViewService.getBranchDemandList(this.branchDemandDetail.region).subscribe((response) => {
      this.roViewService.getBranchDemandList(this.region).subscribe((response) => {


        if(response!== null){
          this.branchDemandDetailArray = response;
          console.log("BRANCH CASH DEMAND : ", JSON.stringify(response));
          console.warn("branchDemandDetailArray.length.length: " ,this.branchDemandDetailArray.length);
          
        }
        
      // console.log('Branch List Data .. '+response);
      // console.log('length'+response.length);

    });
  }

  makePlan(){

    

  }



  branch_cash_requirement_header = [
    'Sr. No.',
    'Branch Code',
    'Branch Name',
    'Cash Demand',
    'Retention Limit',
    'Retention %',
     
     'Action'
  ];
 

}
