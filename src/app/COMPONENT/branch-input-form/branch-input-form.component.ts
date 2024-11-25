import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandService } from 'src/app/demand.service';
import { BranchDemandDetail } from 'src/app/MODEL/branch-demand-detail';
// import { BranchDemandService } from 'src/app/SERVICE/branch-demand.service';
// import { ProductService } from 'src/app/SERVICE/product.service';

@Component({
  selector: 'app-branch-input-form',
  templateUrl: './branch-input-form.component.html',
  styleUrls: ['./branch-input-form.component.css']
})
export class BranchInputFormComponent {

  branchDemandDetail = {} as BranchDemandDetail;

  // branchDemandDetail: any = {
  //   // Define properties based on your API's expected structure
  // };

  constructor(private branchDemandService: DemandService,private router:Router){}

  showForm:string='no';

  ngOnInit(): void {
    throw new Error('Method not implemented.');


 


  }
  isSpinnerLoading:boolean = false;

onSubmit(): void {


  // this.postData();

  console.log(" In branch input component")
  console.log(this.branchDemandDetail);

  this.postData();

    // this.route.navigate(['/gstmsme/doclist']);
  }

  // postData(){

  // }


  postData(){
    console.log(" IN BRANCH DEMAND POST COMPONENT")

    console.warn("IN BRANCH DEMAND POST COMPONENT")
  console.warn()


  // this.branchDemandService.branchDemandPost(this.branchDemandDetail).subscribe(response => {
  //   // Handle response
  //   console.log('User signed up successfully', response);
  //   if(response){
  //        this.router.navigate(['branch']) //redirect page to branch
  //   }
  // });

  

  this.branchDemandService.branchDemandPost(this.branchDemandDetail).subscribe(
    (response:any)=>{
          console.log('Branch Demand Data ', response);

          this.branchDemandDetail=response;


      // alert(JSON.stringify(response))
                this.router.navigate(['branch']) //redirect page to branch

    },(error)=>{

      console.error("Error Occur"+JSON.stringify(error))
    }
  );

}

// ************************************************************************************************************************


}
