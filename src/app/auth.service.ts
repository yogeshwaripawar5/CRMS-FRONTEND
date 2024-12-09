// // auth.service.ts

// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private isAuthenticatedSubject: BehaviorSubject<boolean>;
//   public isAuthenticated$: Observable<boolean>;

//   constructor() {
//     // Initialize the BehaviorSubject with the initial authentication state
//     this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
//     this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
//   }

//   // Method to check if the user is authenticated
//   isAuthenticated(): boolean {
//     return this.isAuthenticatedSubject.value;
//   }

//   // Method to perform login (you can modify this based on your authentication logic)
//   login(username: string, password: string): Observable<boolean> {
//     // Example: Check credentials against a server or perform any authentication logic
//     // For simplicity, this example always considers the login successful
//     const loginSuccessful = true;

//     if (loginSuccessful) {
//       // Update the authentication state
//       this.isAuthenticatedSubject.next(true);
//     }

//     // Return an observable indicating the login success/failure
//     return new Observable<boolean>((observer) => {
//       observer.next(loginSuccessful);
//       observer.complete();
//     });
//   }

//   // Method to perform logout
//   logout(): void {
//     // Clear the authentication state
//     this.isAuthenticatedSubject.next(false);
//   }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UserDetail } from './MODEL/user-detail';
// import { UserModelData } from './login/model/user.model';
// import { ApiService } from '../SERVICES/Login/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  userModel = {} as UserDetail;

  constructor(private route: Router) {
    this.isAuthenticated = this.retrieveLoggedInStatus();
  }

  // For demonstration purposes, this method always returns the authentication status
  isAuthenticat(): boolean {
    return this.isAuthenticated;
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
  status!: boolean;

  login(username: string, password: string): Promise<boolean> {
    // Implement your login logic here (e.g., API calls, validation, etc.)
    // For demonstration purposes, let's assume successful login sets isAuthenticated to true
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        if (username != '' && password === '') {
          this.isAuthenticated = true;
          this.isAuthenticatedSubject.next(true);

          this.status = true;
        } else {
          this.isAuthenticatedSubject.next(false);
          this.status = false;
        }
      }, 1000);
      resolve(this.status);
    });
  }

  // login(username: string, password: string): Promise<void> {
  //   // console.log('AuthServise Component Called' + username + '   ' + password);
  //   return new Promise((resolve, reject) => {
  //     if (username != '' && password != '') {
  //       this.isAuthenticated = true;
  //       const userData = { username, role: 'user' };
  //       localStorage.setItem('userId', JSON.stringify(userData));
  //       //   console.log('Resolve Component Called');
  //       resolve();
  //     } else {
  //       reject('Invalid credentials');
  //     }
  //   });
  // }

  logout(): void {
    // Implement logout logic if needed (clear tokens, reset flags, etc.)

    this.isAuthenticated = false;
    this.isAuthenticatedSubject.next(false);
    localStorage.clear();
    sessionStorage.clear();
    this.route.navigate(['/login']);
  }

  getUserData(): any {
    // Retrieve user session data from localStorage
    const storedData = localStorage.getItem('userId');

    return storedData ? JSON.parse(storedData) : null;
  }

  private retrieveLoggedInStatus(): boolean {
    // Retrieve isLoggedInVar from localStorage
    const storedData = localStorage.getItem('userId');
    return storedData ? true : false;
  }
  private redirectKey = 'userRedirectInfo';

  setRedirectInfo(url: string): void {
    const redirectInfo = { url, timestamp: new Date().getTime() };
    localStorage.setItem(this.redirectKey, JSON.stringify(redirectInfo));
  }

  getRedirectInfo(): { url: string; timestamp: number } | null {
    const redirectInfoString = localStorage.getItem(this.redirectKey);
    return redirectInfoString ? JSON.parse(redirectInfoString) : null;
  }

  clearRedirectInfo(): void {
    localStorage.removeItem(this.redirectKey);
  }

  redirectAfterLogin(): void {

    console.log('IN REDIRECT PAGE');
  const abc = sessionStorage.getItem("UserModelData");
  console.log("GET SESSION :"+abc)
    const redirectInfo = this.getRedirectInfo();
    // if(this.userModel.)
    const redirectTo = redirectInfo ? redirectInfo.url : '/header';
    this.clearRedirectInfo();
    this.route.navigateByUrl(redirectTo);
  }


}
