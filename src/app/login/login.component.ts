import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../employee';
import {Router} from '@angular/router'
import { FormGroup,FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:Array<User>=[];
formValue:any;
  constructor(private userService:UsersService,private formBuilder:FormBuilder ,private router:Router) { 

this.formValue=this.formBuilder.group({
  userName:['',Validators.required],
  password:['',Validators.required]
})
  }

  ngOnInit(): void {
  }

loginUser(data:any){
  console.log(data);
  
  this.userService.loginUser(data).subscribe(data=>{

  });
}

}
