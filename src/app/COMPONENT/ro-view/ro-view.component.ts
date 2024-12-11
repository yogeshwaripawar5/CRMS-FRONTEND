import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize, throwError } from 'rxjs';
import { BranchDemandDetail } from 'src/app/MODEL/branch-demand-detail';
import { BankSummary } from 'src/app/MODEL/region-wise-summary';
import { UserDetail } from 'src/app/MODEL/user-detail';
import { IpAddressService } from 'src/app/SERVICE/ip-address.service';
import { RoViewService } from 'src/app/SERVICE/ro-view.service';

@Component({
  selector: 'app-ro-view',
  templateUrl: './ro-view.component.html',
  styleUrls: ['./ro-view.component.css']
})

export class RoViewComponent {

  branchDemandDetail = {} as BranchDemandDetail;
  userModelData = {} as UserDetail;

  branchDemandDetailArray:BranchDemandDetail[]=[];
  individualRoSummary:BankSummary[]=[];

  cashRetentionLimit: any;
  // http: any;
  isSpinnerLoading: boolean | undefined;

  constructor(private roViewService: RoViewService,
    private router:Router,
    private ipService:IpAddressService,
    private http:HttpClient,){}
  region:string='';

  ngOnInit(): void {
  
    const abc = sessionStorage.getItem("UserModelData");
    console.log("GET SESSION :"+abc)
    this.userModelData = JSON.parse(abc!);
  
    console.log("GET SESSION usermodel :"+this.userModelData);
    
    this.getBranchDemandList();
    this.getIndividualRoSummary();
    // this.region='AURANGABAD';

   
  }



  getBranchDemandList(){

    this.region=this.userModelData.roname

    // this.roViewService.getBranchDemandList(this.branchDemandDetail.region).subscribe((response) => {
      this.roViewService.getBranchDemandList(this.region).subscribe((response) => {

        console.log('RO RESPONSE '+response);

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
    'Block',
    'Other Bank Accounts',
    'Cash Retention Limit',
    'Previous Day Cash On Hand',
    'Soiled Cash',
    'Probable Cash On Hand',
    'Cash Requirement',
    'Excess Cash For Remittance'
    // 'Retention Limit',
    // 'Retention %',
     
    //  'Action'
  ];



  //*************************************************************************************************************************************************** */
//   downloadReport(region:string){

//     setTimeout(() => {

//  // if(receivedData == 'PEN' && this.userModelData.roname=="CREDIT" && (this.userModelData.u_type=="CM" || this.userModelData.u_type=="OF")){
//   this.isSpinnerLoading = true;
//   // const url='http://'+this.ipservise.getIPAddress()+'/api/v1/sanction-note2/'+referenceNumber+'/'+ sessionStorage.getItem('userId');
//   const url='http://'+this.ipService.getIPAddress()+'/api/v1/Report/download/'+this.userModelData.roname;
//   console.log(' URL :'+url);
//   // let param = new HttpParams().set('u_id', this.userModelData.u_id).set('u_type',this.userModelData.u_type).set('referenceId',referenceNumber).set('roname',this.userModelData.roname).set('u_loc',this.userModelData.u_loc);


//  // Define your headers
// const headers = new HttpHeaders({
// 'Accept': 'application/pdf',
// 'Content-Type': 'application/json'
// });

// // Make the HTTP request
// this.http.get(url, { headers: headers, responseType: 'blob', observe: 'response'})  // Use observe: 'response' to get full response
// .pipe(
  
// finalize(() => this.isSpinnerLoading = false),
// catchError(err => {
//   console.log('In error');
// console.error('Error Occurred:', err);
// return throwError(err);  // Use throwError here
// })
// )
// .subscribe(
// (response: HttpResponse<Blob>) => {  // Use HttpResponse<Blob> type
// this.isSpinnerLoading = false;

// // Extract filename from the Content-Disposition header
// const contentDisposition = response.headers.get('Content-Disposition');

// // let fileName = 'CRMSREPORT'.pdf;  // Default filename

// let fileName = 'CRMSREPORT.pdf';  // Default filename


// // Ensure response.body is not null
// if (response.body) {
//   console.log('In Response');
//   // Create a blob and download it
//   const blob = new Blob([response.body], { type: 'application/pdf' });
//   const fileURL = window.URL.createObjectURL(blob);
  
//   // Create a link element, set the href and download attributes, and trigger the download
//   const a = document.createElement('a');
//   a.href = fileURL;
//   a.download = fileName;
//   document.body.appendChild(a);
//   a.click();
  
//   // Cleanup
//   document.body.removeChild(a);
//   window.URL.revokeObjectURL(fileURL);
// } else {
//   console.error('No file data received');
// }
// },
//   (error: any) => {
// // Optionally handle error in subscribe callback
// this.isSpinnerLoading = false; 
// console.error('Error Occurred:', error);
// }
// );

//   }, 500);


// }




// *******************************************************************************************************************************
downloadReport(region:string){
  // this.userModelData.roname='AURANGABAD';
  console.log(this.region+"region");

  setTimeout(() => {

// if(receivedData == 'PEN' && this.userModelData.roname=="CREDIT" && (this.userModelData.u_type=="CM" || this.userModelData.u_type=="OF")){
this.isSpinnerLoading = true;
// const url='http://'+this.ipservise.getIPAddress()+'/api/v1/sanction-note2/'+referenceNumber+'/'+ sessionStorage.getItem('userId');
const url='http://'+this.ipService.getIPAddress()+'/api/v1/Report/download/'+region;
console.log(' URL :'+url);
// let param = new HttpParams().set('u_id', this.userModelData.u_id).set('u_type',this.userModelData.u_type).set('referenceId',referenceNumber).set('roname',this.userModelData.roname).set('u_loc',this.userModelData.u_loc);


const headers = new HttpHeaders({
  'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Expecting Excel (XLSX) format
  'Content-Type': 'application/json'  // Assuming the request body content is JSON
});

// Make the HTTP request
this.http.get(url, { headers: headers, responseType: 'blob', observe: 'response'})  // Use observe: 'response' to get full response
.pipe(

finalize(() => this.isSpinnerLoading = false),
catchError(err => {
console.log('In error');
console.error('Error Occurred:', err);
return throwError(err);  // Use throwError here
})
)
.subscribe(
(response: HttpResponse<Blob>) => {  // Use HttpResponse<Blob> type
this.isSpinnerLoading = false;

// Extract filename from the Content-Disposition header
const contentDisposition = response.headers.get('Content-Disposition');

// let fileName = 'CRMSREPORT'.pdf;  // Default filename

// let fileName = 'CRMSREPORT.xlsx';  // Default filename
let fileName = 'CRMSREPORT.csv';  // Default filename


// Ensure response.body is not null
if (response.body) {
console.log('In Response');
// Create a blob and download it
const blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
const fileURL = window.URL.createObjectURL(blob);

// Create a link element, set the href and download attributes, and trigger the download
const a = document.createElement('a');
a.href = fileURL;
a.download = fileName;
document.body.appendChild(a);
a.click();

// Cleanup
document.body.removeChild(a);
window.URL.revokeObjectURL(fileURL);
} else {
console.error('No file data received');
}
},
(error: any) => {
// Optionally handle error in subscribe callback
this.isSpinnerLoading = false; 
console.error('Error Occurred:', error);
}
);

}, 500);


}


getIndividualRoSummary(){
  this.region=this.userModelData.roname

  this.roViewService.getIndividualRoSummary(this.region).subscribe((response) => {

    console.log('BANK SUMMARY DATA RESPONSE '+JSON.stringify(response));

    if(response!== null){
      this.individualRoSummary = response;
      // this.cashRetentionLimit=this.bankSummary.retentionLimitSum;
      // this.previousDayCashAmount=this.bankSummary.previousDayCashOnHandSum;

      console.log("BANK SUMMARY DATA : ", JSON.stringify(response));
      console.log('RETENTION :'+this.cashRetentionLimit);
      console.warn("BANK SUMMARY DATA.length.length: " ,this.individualRoSummary);
      
    }
    

});
}
}
