import { Component, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetail,UserLogin } from '../MODEL/user-detail';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService,private auth:AuthService,
    private router:Router,private activateRoute:ActivatedRoute){}

  @Input()userId:string='';

  responseMessage: string = '';
  mran: number = 0;  // Example values
  ran: number =0;
  u: string = '1896030755';
  
  userModelData = {} as UserDetail;
  userLoginData = {} as UserLogin;

  ngOnInit(): void {    
      // this.getUserData();
    this.activateRoute.queryParams.subscribe(params => {
      // Extract 'mran', 'ran', and 'u' from the query parameters
      this.mran = params['mran'];
      this.ran = params['ran'];
      

      console.log(this.mran);
      console.log(this.ran);
      console.log(this.u);


      // if (this.mran !== undefined && this.ran !== undefined && this.u) {
      //   this.getUserData1();
      // } else {
      //   this.responseMessage = 'Invalid or missing query parameters.';
      // }

      // Now that you have the parameters, call the checkCredential API
    });
    this.getUserData1();
  
    console.log(this.userId)
      
  
  
    }


    getUserData() {
      // Call to the service method to get the user data
      this.loginService.getUserData(this.mran, this.ran, this.u).subscribe(
        (response) => {
          // Log the response data to the console
          console.log('Deviation Compliance Data:');
          console.log('Response: ', response); // Log the object directly
          console.log(JSON.stringify(response)); // Log the object as a string (optional)
    
          // Assuming the 'u' value is part of the response, you can set it directly without stringifying the whole object
          // this.userLoginData.u = response.u; // Assuming 'u' is a property of the response
    
          // Log the 'u' value
          console.log('User u: ' + this.userLoginData.u);
    
          // If you need to log the entire user model data:
          console.log('USER MODEL DATA: ', this.userModelData);
    
          // Check if the response is not null or undefined
          if (response !== null && response !== undefined) {
            // Call the getCredentialDetail method
            this.loginService.getCredentialDetail(this.mran, this.ran, this.u).subscribe(
              (credentialResponse: any) => {
                // Handle the credential data if necessary
                console.log('Credential Details: ', JSON.stringify(credentialResponse));
              },
              (error: any) => {
                // Handle error for getCredentialDetail if any
                console.error('Error fetching credential details:', error);
              }
            );
          }
        },
        (error) => {
          // Handle error for getUserData if any
          console.error('Error fetching user data:', error);
        }
      );
    }



    getUserData1(){
      this.loginService.getUserData1(this.u).subscribe((response: any) => {
        // Handle result
        console.log(" Deviation Compliance Data :")
        console.log('response .. '+response);
        this.userModelData=response;
        console.log(this.userModelData);
    
        sessionStorage.setItem('userId', this.userModelData.u_id);
        this.userModelData = response;
        sessionStorage.setItem(
          'UserModelData',
          JSON.stringify(this.userModelData));
        // console.log(JSON.stringify(this.userModel));
         this.auth.redirectAfterLogin();
    
      });
    
    }
    

  }