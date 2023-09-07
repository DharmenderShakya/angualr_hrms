import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Login } from './employee';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl='/auth'
  private isAuthenticated=false;
  constructor(private httpClien:HttpClient) { }

  login(login:Login):Observable<boolean>{
    this.httpClien.post(`${this.baseUrl}/authenticate`,login);
    this.isAuthenticated=true;
    return of(true);
  }

  logout():void{
    this.isAuthenticated=false;
  }

  isAuthenticatedUser():boolean{
return this.isAuthenticated;
  }
}
