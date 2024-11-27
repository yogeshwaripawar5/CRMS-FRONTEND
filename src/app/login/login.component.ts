import { Component, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService,private router:Router,private activateRoute:ActivatedRoute){}

  @Input()userId:string='';

  responseMessage: string = '';
  mran: number = 0;  // Example values
  ran: number =0;
  u: string = '';

  ngOnInit(): void {    
      this.getUserData();
    this.activateRoute.queryParams.subscribe(params => {
      // Extract 'mran', 'ran', and 'u' from the query parameters
      this.mran = params['mran'];
      this.ran = params['ran'];
      this.u = params['u'];

      console.log(this.mran);
      console.log(this.ran);
      console.log(this.u);


      if (this.mran !== undefined && this.ran !== undefined && this.u) {
        this.getUserData();
      } else {
        this.responseMessage = 'Invalid or missing query parameters.';
      }

      // Now that you have the parameters, call the checkCredential API
    });
    // this.getUserData();
  
    console.log(this.userId)
      
  
  
    }

    getUserData(){
      this.loginService.getUserData(this.mran, this.ran, this.u).subscribe((response) => {
        // Handle result
        console.log(" Deviation Compliance Data :")
        console.log('response .. '+response);
    
    
      });
    
    
    }

}
