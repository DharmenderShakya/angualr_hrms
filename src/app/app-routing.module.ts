import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { LeaveComponent } from './leave/leave.component'
import { ProjectComponent } from './project/project.component';
import { SalaryComponent } from './salary/salary.component';
import { EmployeeDetailsPageComponent } from './employee-details-page/employee-details-page.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { SalaryFormComponent } from './salary-form/salary-form.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { DeshboardComponent } from './deshboard/deshboard.component';
const routes: Routes = [
  {path:'login',component:LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'deshboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
