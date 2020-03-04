import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent }   from './employees/employees.component';
import { EmployeeDetailComponent }      from './employee-detail/employee-detail.component';
import { HomeComponent }  from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
