import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandService } from 'src/app/demand.service';
import { BranchDemandDetail } from 'src/app/MODEL/branch-demand-detail';
import { CashRetentionLimit } from 'src/app/MODEL/cash-retention-limit';
import { UserDetail } from 'src/app/MODEL/user-detail';

@Component({
  selector: 'app-branch-input-form-update',
  templateUrl: './branch-input-form-update.component.html',
  styleUrls: ['./branch-input-form-update.component.css']
})
export class BranchInputFormUpdateComponent {

  branchDemandDetail = {} as BranchDemandDetail;
  cashRetentionLimit = {} as CashRetentionLimit;

  userModelData = {} as UserDetail;
  showJustificationBlock: boolean = false;
  // branchDemandDetail: any = {
  //   // Define properties based on your API's expected structure
  // };

  constructor(private branchDemandService: DemandService,private router:Router){}

  showForm:string='no';


  ngOnInit(): void {

 

  const abc = sessionStorage.getItem("userModelData");
  console.log("GET SESSION :"+abc)
  this.userModelData = JSON.parse(abc!);

  console.log("GET SESSION usermodel :"+this.userModelData);

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
  console.log('USER BRCODE : '+this.userModelData.brcode)
  this.branchDemandService.branchRetentionLimit(this.userModelData.brcode).subscribe((response) => {
    // Handle result
    console.log(" Deviation Compliance Data :")
    console.log('response .. '+response);
    this.cashRetentionLimit=response;

    this.branchDemandDetail.retentionLimit=this.cashRetentionLimit.retentionLimit;


    this.branchDemandDetail.brcode=this.userModelData.brcode;
    this.branchDemandDetail.branchName=this.userModelData.brname;
    this.branchDemandDetail.region=this.userModelData.roname;


 

  });

}


// checkRetention(): void {
//   if (this.previousDayData > this.retentionLimit) {
//     this.showJustificationBlock = true; // Show justification block if data exceeds retention limit
//   } else {
//     this.showJustificationBlock = false; // Hide justification block if data does not exceed retention limit
//   }
// }

}
