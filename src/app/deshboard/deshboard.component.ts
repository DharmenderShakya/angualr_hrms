import { EmployeeServiceService } from '../employee-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
declare var window:any;
@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.css']
})
export class DeshboardComponent implements OnInit {
  @Output() toggle=new EventEmitter();
  constructor(private router:Router,private employeeService:EmployeeServiceService) {

   }
employee=true;
leave=false;
salary=false;
project=false;
   showChildModal() {
    this.employeeService.childModal = true;
  }
  toggleSidebar(){
    this.toggle.emit(); 
  }
 
  ngOnInit(): void {
  }



  
  }
  

