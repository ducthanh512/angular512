import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {Dummy} from '../dummy';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})



export class EmployeesComponent implements OnInit {
  employees: Employee[];
  dummy: Dummy;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  
 /** Return a list of employess */

  getEmployees(): void {
    this.employeeService.getDummies()
    .subscribe(dummy => this.employees = dummy.data);

  }

}
