import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandService } from 'src/app/demand.service';
import { BranchDemandDetail } from 'src/app/MODEL/branch-demand-detail';
import { CashRetentionLimit } from 'src/app/MODEL/cash-retention-limit';
import { SoiledCurrencyData } from 'src/app/MODEL/soiled-currency-data';
import { UserDetail } from 'src/app/MODEL/user-detail';

@Component({
  selector: 'app-branch-input-form-update',
  templateUrl: './branch-input-form-update.component.html',
  styleUrls: ['./branch-input-form-update.component.css']
})
export class BranchInputFormUpdateComponent {

  branchDemandDetail = {} as BranchDemandDetail;
  cashRetentionLimit = {} as CashRetentionLimit;
  soiledCurrencyData = {} as SoiledCurrencyData;
  // otherBankList={}as
  // previousDayCashOnHand = {} as CashRetentionLimit;


  userModelData = {} as UserDetail;
  showJustificationBlock: boolean = true;


  constructor(private branchDemandService: DemandService,private router:Router){}

  showForm:string='no';
  bankAccountList: string[] = [];


  ngOnInit(): void {

  const abc = sessionStorage.getItem("UserModelData");
  console.log("GET SESSION :"+abc)
  this.userModelData = JSON.parse(abc!);

  console.log("GET SESSION usermodel :"+this.userModelData);
  this.branchDemandDetail.demandSubmitBy=this.userModelData.u_id;

  this.getRetentionLimit();
  this.getPreviousDayCashOnHAnd();
  this.getBankHavingCurrentAcWithOtherBank();
  this.getSoiledCurrencyData();
  this.getBranchBlock();


  // this.getBranchDemandDetail();
  
  // this.bankAccountList = this.getBankAccountList();

  }
  
  isSpinnerLoading:boolean = false;


//************************************ SUBMIT METHOD ***************************************** */  

onSubmit(): void {


  console.log(" In branch input component")
  console.log(this.branchDemandDetail);

  console.log(this.branchDemandDetail.retentionLimit);

  this.postData();

  }

 //************************************ POST METHOD ***************************************** */  


  postData(){
    console.log(" IN BRANCH DEMAND POST COMPONENT")

    console.warn("IN BRANCH DEMAND POST COMPONENT")
  console.warn()

  

  this.branchDemandService.branchDemandPost(this.branchDemandDetail).subscribe(
    (response:any)=>{
          console.log('Branch Demand Data ', response);
          this.branchDemandDetail.demandSubmitBy=this.userModelData.u_id;

          this.branchDemandDetail=response;

          console.log('Cash retention Limit'+this.branchDemandDetail.retentionLimit)

alert('DATA SAVED SUCESSFULLY');

                // this.router.navigate(['login']) //redirect page to branch

                // Delay the navigation to ensure alert is dismissed first
setTimeout(() => {
  this.router.navigate(['header']);
}, 0); 

    },(error)=>{

      console.error("Error Occur"+JSON.stringify(error))
    }
  );

}


//************************************ GET PREVIOUS DAY CASH ON HAND METHOD ***************************************** */  

getBranchDemandDetail(){

  console.log('USER BRCODE : '+this.userModelData.brcode)
  this.branchDemandService.branchDemandDetail(this.userModelData.brcode).subscribe((response) => {
    // Handle result
    console.log(" BRANCH DEMAND DETAIL SERVICE :")
    console.log('BRANCH DEMAND DETAIL SERVICE : .. '+response);

        this.branchDemandDetail=response;
    console.log('this.branchDemandDetail.otherBankAc :'+this.branchDemandDetail)
 

  });

}


//************************************ GET RETENTION METHOD ***************************************** */  

getRetentionLimit(){
  console.log('USER BRCODE : '+this.userModelData.brcode)
  this.branchDemandService.branchRetentionLimit(this.userModelData.brcode).subscribe((response) => {
    // Handle result
    console.log(" BRANCH RETENTION LIMIT SERVICE :")
    console.log('BRANCH RETENTION LIMIT DATA  .. '+response);
    this.cashRetentionLimit=response;

    this.branchDemandDetail.retentionLimit=this.cashRetentionLimit.retentionLimit;

    console.log('BRANCH RETENTION LIMIT DATA this.branchDemandDetail.retentionLimit .. '+this.branchDemandDetail.retentionLimit);

    this.branchDemandDetail.brcode=this.userModelData.brcode;
    this.branchDemandDetail.branchName=this.userModelData.brname;
    this.branchDemandDetail.region=this.userModelData.roname;


 

  });

}

//************************************ GET PREVIOUS DAY CASH ON HAND METHOD ***************************************** */  

getPreviousDayCashOnHAnd(){

  console.log('USER BRCODE : '+this.userModelData.brcode)
  this.branchDemandService.branchPreviousDayCashOnHand(this.userModelData.brcode).subscribe((response) => {
    // Handle result
    console.log(" BRANCH PREVIOUS DAY CASH ON HAND SERVICE :")
    console.log('BRANCH PREVIOUS DAY CASH ON HAND SERVICE .. '+response);
    this.branchDemandDetail.previousDayCashOnHand=response;
 
    // this.branchDemandDetail.previousDayCashOnHand=360000000;
    // console.log('BRANCH PREVIOUS DAY CASH ON HAND SERVICE .. '+ this.branchDemandDetail.previousDayCashOnHand);
    this.showJustificationBlock = this.showJustification();
  });

}

//************************************ GET PREVIOUS DAY CASH ON HAND METHOD ***************************************** */  

getBankHavingCurrentAcWithOtherBank(){

  console.log('USER BRCODE : '+this.userModelData.brcode)
  this.branchDemandService.bankHavingCurrentAcWithOtherBank(this.userModelData.brcode).subscribe((response) => {
    // Handle result
    console.log(" BANK HAVING CURRENT AC WITH OTHER BANK SERVICE :")
    console.log('BANK HAVING CURRENT AC WITH OTHER BANK SERVICE .. '+response);

    let result = response.join(', ');


    if (!result) {
      this.branchDemandDetail.otherBankAc = 'NA';
    } else {
      this.branchDemandDetail.otherBankAc = result;
    }
    console.log('this.branchDemandDetail.otherBankAc :'+this.branchDemandDetail.otherBankAc)

    

 

  });

}


//************************************ GET SOILED CURRENCY METHOD ***************************************** */  

getSoiledCurrencyData(){

  console.log('USER BRCODE : '+this.userModelData.brcode)
  this.branchDemandService.soiledCurrencyDetails(this.userModelData.brcode).subscribe((response) => {
    // Handle result
    console.log(" BRANCH HAVING SOILED CURRENCY SERVICE :")
    console.log('BRANCH HAVING SOILED CURRENCY SERVICE  .. '+response);

    this.branchDemandDetail.soiledCurrencyAmount=response;
    console.log(' AMOUNT NOTE '+this.branchDemandDetail.soiledCurrencyAmount);
  

    console.log('this.branchDemandDetail.soiledCurrencyAmount :'+this.branchDemandDetail.soiledCurrencyAmount)

    

 

  });

}

// *******************************************************************************************************************************

getBranchBlock(){

  console.log('USER BRCODE : '+this.userModelData.brcode)
  this.branchDemandService.branchBlockDetail(this.userModelData.brcode).subscribe((response:String) => {
 
    console.log(" BRANCH BLOCK SERVICE :")
    console.log('BRANCH BLOCK SERVICE  .. '+response);
    

    if (!response) {
      this.branchDemandDetail.blockName = 'NA';
    } else {
      this.branchDemandDetail.blockName = response;
    }
  

    console.log(' BRANCH BLOCK NAME '+JSON.stringify(this.branchDemandDetail.blockName));
    console.log('this.branchDemandDetail.blockName :'+this.branchDemandDetail.blockName)

  });

}
// *******************************************************************************************************************************

showJustification():boolean
{
  console.log("************"+this.showJustificationBlock)
  console.log("**********"+JSON.stringify(this.branchDemandDetail.previousDayCashOnHand));
  console.log("***********"+JSON.stringify(this.branchDemandDetail.retentionLimit));
    // Compare the values

    const previousDayCashOnHand = Number(this.branchDemandDetail.previousDayCashOnHand);
    const retentionLimit = Number(this.branchDemandDetail.retentionLimit);
    const shouldShowJustification = previousDayCashOnHand > retentionLimit;

    // const shouldShowJustification = this.branchDemandDetail.previousDayCashOnHand < this.branchDemandDetail.retentionLimit;
    console.log("shouldShowJustification"+shouldShowJustification);

    // Set the showJustificationBlock based on the comparison
    this.showJustificationBlock = shouldShowJustification;
  
    // Log the result (you can remove this in production if not needed)
    console.log('this.showJustificationBlock:', this.showJustificationBlock);
  
    // Return the result
    return this.showJustificationBlock;
}

}
