import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../employee';
import {Router} from '@angular/router'
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:Array<User>=[];
formValue:FormGroup;
  constructor(private login:AuthService,private formBuilder:FormBuilder ,private router:Router) { 

this.formValue=new FormGroup({
  name:new FormControl(),
  password:new FormControl()
})
  }

  ngOnInit(): void {
  }

loginUser(data:any){
  
 this.login.login(data).subscribe(authenticated=>{
  if (authenticated) {
    this.router.navigate(['/deshboard']);
  }
  else{

  }
 })
}

}
