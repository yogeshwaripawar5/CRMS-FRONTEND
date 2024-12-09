import { Component, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetail,UserLogin } from '../MODEL/user-detail';
import { AuthService } from '../auth.service';
import { IpAddressService } from '../SERVICE/ip-address.service';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService,private auth:AuthService,
    private router:Router,private activateRoute:ActivatedRoute,    private ipService: IpAddressService,
  ){}
  //  private apiService: ApiService,
  //   private auth: AuthService,
  //   private ipService: IPAddressService,
  //   private snackBar: AlertsnackbarService
  @Input()userId:string='';

  responseMessage: string = '';
  mran: number = 0;  // Example values
  ran: number =0;
  // u: string = '189601893';
  
  userModelData = {} as UserDetail;
  userLoginData = {} as UserLogin;

  errorMessage: string = '';

  loginData = {
    username: '',
    password: '',
  };

  ngOnInit(): void {    
    this.ipService.setIpAddress();


    // this.activateRoute.queryParams.subscribe(params => {
    //   // Extract 'mran', 'ran', and 'u' from the query parameters
    //   this.mran = params['mran'];
    //   this.ran = params['ran'];
      

    //   // console.log(this.mran);
    //   // console.log(this.ran);
    //   // console.log(this.u);
    //   // this.getUserData1();
    //   this.getUserData1();


  
    // });
 
      
  
  
    }


    // getUserData() {
    //   // Call to the service method to get the user data
    //   this.loginService.getUserData(this.mran, this.ran, this.u).subscribe(
    //     (response) => {
    //       // Log the response data to the console
    //       console.log('Deviation Compliance Data:');
    //       console.log('Response: ', response); // Log the object directly
    //       console.log(JSON.stringify(response)); // Log the object as a string (optional)
    
    //       // Assuming the 'u' value is part of the response, you can set it directly without stringifying the whole object
    //       // this.userLoginData.u = response.u; // Assuming 'u' is a property of the response
    
    //       // Log the 'u' value
    //       console.log('User u: ' + this.userLoginData.u);
    
    //       // If you need to log the entire user model data:
    //       console.log('USER MODEL DATA: ', this.userModelData);
    
    //       // Check if the response is not null or undefined
    //       if (response !== null && response !== undefined) {
    //         // Call the getCredentialDetail method
    //         this.loginService.getCredentialDetail(this.mran, this.ran, this.u).subscribe(
    //           (credentialResponse: any) => {
    //             // Handle the credential data if necessary
    //             console.log('Credential Details: ', JSON.stringify(credentialResponse));
    //             this.getUserData1();
    //           },
    //           (error: any) => {
    //             // Handle error for getCredentialDetail if any
    //             console.error('Error fetching credential details:', error);
    //           }
    //         );
    //       }
    //     },
    //     (error) => {
    //       // Handle error for getUserData if any
    //       console.error('Error fetching user data:', error);
    //     }
    //   );
    // }



//     getUserData1(){
//       this.loginService.getUserData1(this.u).subscribe((response: any) => {
//         // Handle result
//         console.log(" Deviation Compliance Data :")
//         console.log('response .. '+response);
//         this.userModelData=response;
//         console.log(this.userModelData);
    
//         sessionStorage.setItem('userId', this.userModelData.u_id);
//         this.userModelData = response;
//         sessionStorage.setItem(
//           'UserModelData',
//           JSON.stringify(this.userModelData));

//         console.log(JSON.stringify(this.userModelData));

//         const abc = sessionStorage.getItem("UserModelData");
//         console.log("GET SESSION :"+abc)
//         this.userModelData = JSON.parse(abc!);
      

//         // Retrieving the data from sessionStorage
// // const retrievedUserModelData = JSON.parse(sessionStorage.getItem('userModelData'));
// // console.log(retrievedUserModelData); 
//         console.log("GET SESSION usermodel :"+this.userModelData)
//         // this.userId=this.userModelData.u_id;
//         // this.branchCode=this.userModelData.brcode;
//         // this.username=this.userModelData.u_name;
        
//          this.auth.redirectAfterLogin();
         
    
//       });
    
//     }



    async onValidate() {
      this.ipService.setIpAddress();
      // this.isSpinnerLoading = true;
      console.log('LoginComponent Called');
      this.auth
        .login(this.loginData.username, this.loginData.password)
        .then(() => {
          console.log('AuthService Called');
          this.loginService
                    // .getUserDataFromMSSO(this.loginData.username,this.loginData.password)
             .getUserData1(this.loginData.username)
            .pipe(
              catchError(this.handleError)
            )
            .subscribe({
              next: (response) => {
                //            console.log('Response Called' + JSON.stringify(response));
                this.userModelData=response;
                                sessionStorage.setItem(
                  'UserModelData',
                  JSON.stringify(this.userModelData)
                  
                )
                // this.isSpinnerLoading = false;
                sessionStorage.setItem('userId', this.userModelData.u_id);

                console.log('session set');

                sessionStorage.getItem(this.userId);
               // console.log(JSON.stringify(this.userModel));
                this.auth.redirectAfterLogin();
              },
              error: (error) => {
                // console.log('Error Called' + error);
                // this.isSpinnerLoading = false;
                alert('User ID/Password Not matched');
                //    this.showSnackbar('User Id Not Found/Invalid');
              },
              complete: () => {
                console.log('Process Is Complete');
              //  this.snackBar.open('Login Successfully');
              },
            });
  
          //   this.auth.redirectAfterLogin();
        })
        .catch(this.handleError);
    }
    
    private handleError(error: HttpErrorResponse) {
      // this.isSpinnerLoading=false;
      // Log the error to the console (you can also send it to a logging service)
      console.error('An error occurred:', error.message);
      
      // Optionally, return a user-friendly message or observable
      return throwError('Something went wrong; please try again later.');
    }


  }