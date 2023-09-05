import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSidebar = true;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  } 
  title = 'hrms';
}