import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserDetail } from 'src/app/MODEL/user-detail';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() closeSidenav = new EventEmitter<void>();

  title = 'CRMS';
  // username: string = 'Prabhali Pawar';  // A string variable
  // userId: String = '189602100';        // A number variable
  // branchCode: String = '4000';        // A number variable

  // department: string = 'Information Technology';      // A string variable for department
  

  username: string = '';  // A string variable
  userId: String = '';        // A number variable
  branchCode: String = '';        // A number variable

  department: string = ''; 
  userModelData = {} as UserDetail;
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  currentDateTime: string = '';

  ngOnInit() {
    // this.updateDateTime();  // Initial call to set the datetime
    // setInterval(() => this.updateDateTime(), 60000);  // Update every minute

    const abc = sessionStorage.getItem('UserModelData');
    this.userModelData = JSON.parse(abc!);
    const currentdate = new Date();
    // this.currentyr = currentdate.getFullYear();

    console.log(this.userModelData+'this.userModelData');

    // console.log('HEADER INITIALISED 8888888')
    this.headerData();

 
  }

  updateDateTime() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString();

// Format the date to be "Month Day, Year" (e.g., November 23, 2024)
const formattedDate = now.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});


// Combine the day, formatted date, and time
this.currentDateTime = `${day} | ${formattedDate} | ${time}`;  }

  constructor( private router:Router,private activateRoute:ActivatedRoute,private authService:AuthService) {
    // You can also assign variables in the constructor
    console.log('Component initialized');

}

headerData(){

  const abc = sessionStorage.getItem("UserModelData");
  console.log("GET SESSION :"+abc)
  this.userModelData = JSON.parse(abc!);

  console.log("GET SESSION usermodel :"+this.userModelData)
  this.userId=this.userModelData.u_id;
  this.branchCode=this.userModelData.brcode;
  this.username=this.userModelData.u_name;

  this.navigatePages(this.userModelData);
}

navigatePages(userModelData:UserDetail){
  console.log('IN REDIRECT PAGE');

  if(userModelData.u_loc=='BR' && userModelData.u_type=='OF'){

      this.router.navigateByUrl('/branch');

  }else if (userModelData.u_loc=='RO' ){
    this.router.navigateByUrl('/roView');

  }else if (userModelData.u_loc=='HO' ){
    console.log('IN HO VIEW');
    this.router.navigateByUrl('/hoView');

  }

  
}

onClose() {
  this.closeSidenav.emit();
}
logout() {
  this.authService.logout();
  sessionStorage.clear();
}
}
