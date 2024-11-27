import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandService } from 'src/app/demand.service';
import { BranchDemandDetail } from 'src/app/MODEL/branch-demand-detail';
import { CashRetentionLimit } from 'src/app/MODEL/cash-retention-limit';

@Component({
  selector: 'app-branch-input-form-update',
  templateUrl: './branch-input-form-update.component.html',
  styleUrls: ['./branch-input-form-update.component.css']
})
export class BranchInputFormUpdateComponent {

  branchDemandDetail = {} as BranchDemandDetail;
  cashRetentionLimit = {} as CashRetentionLimit;


  // branchDemandDetail: any = {
  //   // Define properties based on your API's expected structure
  // };

  constructor(private branchDemandService: DemandService,private router:Router){}

  showForm:string='no';
  brcode:string='5129';

  ngOnInit(): void {

  this.getRetentionLimit();

  
    


  }
  
  isSpinnerLoading:boolean = false;

onSubmit(): void {


  // this.postData();

  console.log(" In branch input component")
  console.log(this.branchDemandDetail);

  console.log(this.branchDemandDetail.retentionLimit);

  this.postData();

    // this.route.navigate(['/gstmsme/doclist']);
  }

 

  postData(){
    console.log(" IN BRANCH DEMAND POST COMPONENT")

    console.warn("IN BRANCH DEMAND POST COMPONENT")
  console.warn()

  

  this.branchDemandService.branchDemandPost(this.branchDemandDetail).subscribe(
    (response:any)=>{
          console.log('Branch Demand Data ', response);

          this.branchDemandDetail=response;

          console.log('Cash retention Limit'+this.branchDemandDetail.retentionLimit)


      // alert(JSON.stringify(response))
                this.router.navigate(['branch']) //redirect page to branch

    },(error)=>{

      console.error("Error Occur"+JSON.stringify(error))
    }
  );

}


getRetentionLimit(){
  this.branchDemandService.branchRetentionLimit(this.brcode).subscribe((response) => {
    // Handle result
    console.log(" Deviation Compliance Data :")
    console.log('response .. '+response);
    this.cashRetentionLimit=response;

    this.branchDemandDetail.retentionLimit=this.cashRetentionLimit.retentionLimit;

  });

}

}
