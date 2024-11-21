import { Component } from '@angular/core';

@Component({
  selector: 'app-branch-input-form',
  templateUrl: './branch-input-form.component.html',
  styleUrls: ['./branch-input-form.component.css']
})
export class BranchInputFormComponent {

  // constructor(private branchInputService: BranchInputServiceService,private router:Router){}

  showForm:string='no';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  isSpinnerLoading:boolean = false;

onSubmit(): void {


  this.postData();

  console.log(" In branch input component")
    // this.route.navigate(['/gstmsme/doclist']);
  }

  postData(){

  }

}
