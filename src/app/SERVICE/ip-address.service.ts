import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpAddressService {

  constructor() { }
  setIpAddress(): void {
    sessionStorage.setItem('ipAddress', 'localhost:8085');
    // sessionStorage.setItem('ipAddress', '10.15.51.23:8080');
  
  }

  getIPAddress(): any {
    this.setIpAddress();
    const ipAddressa = sessionStorage.getItem('ipAddress');
    return ipAddressa ? ipAddressa : null;
  }

}
