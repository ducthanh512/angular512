import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {Dummy} from '../dummy';
import {EmployeesComponent} from '../employees/employees.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @Input()
  
  employee: Employee; 
  dummy1 : Dummy;
  chuoi:String;
  employees: Employee[];
  txtSearch:'';
  value =0;
  constructor(    private employeeService: EmployeeService) { }

  @ViewChild(EmployeesComponent)
  employeesComponent: EmployeesComponent;
  ngOnInit(): void {
  }

  /** GET emmloyess and filter by name */
  getemployee(name: string): void {
    console.log(1);
    this.employeeService.getDummies()
    .subscribe(dummy => this.employeesComponent.employees = dummy.data.filter((pro) => pro.employee_name.includes(name))
    );
  }

  SearchName(){
    this.getemployee(this.txtSearch);
  }

}
