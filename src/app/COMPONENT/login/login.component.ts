import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/SERVICE/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  pfNo: string = '';
  mran: string = '';
  ran: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,private loginService: LoginService,
  ) {}


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log('All query params:', params);
     
      if (params['u']) {
        this.pfNo = params['u'];
        console.log('Received userId (pf_no):', this.pfNo);
      } else {
        console.warn('No userId (pf_no) provided in query parameters');
      }
    });

    this.getLoginData();

    
  }

getLoginData(){

  console.log(this.route.queryParams);

  this.route.queryParams.subscribe((params) => {
    this.pfNo = params['u'];  // 'u' is the pf_no parameter
    this.mran = params['mran'];
    this.ran = params['ran'];

   
    // this.branchDemandDetail.retentionLimit=this.cashRetentionLimit.retentionLimit;

  });
  console.log(this.pfNo);
  console.log(this.mran);
  console.log(this.ran);


  this.loginService.validateSession().subscribe((response) => {
    // this.cashRetentionLimit=response;

    console.log('RESPONSE '+response)

  });

  // Capture URL parameters (pf_no, mran, ran) from the query string
  // this.route.queryParams.subscribe((params) => {
  //   this.pfNo = params['u'];  // 'u' is the pf_no parameter
  //   this.mran = params['mran'];
  //   this.ran = params['ran'];

  //   if (this.pfNo && this.mran && this.ran) {
  //     // You can now send these parameters to the backend for validation or store them
  //     this.validateSession(this.pfNo, this.mran, this.ran);

  //   } else {
  //     // Handle error: parameters missing
  //     alert('Required parameters are missing!');
  //     this.router.navigate(['/']);
  //   }
  // });
}
  // validateSession(pfNo: string, mran: string, ran: string) {
  //   throw new Error('Method not implemented.');
  // }
  

}
