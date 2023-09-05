import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
// import { Employee } from './employee';
// import {Router} from  '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private  baseUrl="/user";
  constructor(private httpClient:HttpClient) { }

  loginUser(user:any):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/login`,user);

    
  }
}
