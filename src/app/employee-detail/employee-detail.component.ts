import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {Dummy} from '../dummy';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.sass']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() 
  employee: Employee; 
  dummy1 : Dummy;
  chuoi:String;
  employees: Employee[];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getemployee();
  }

 /** GET emmloyess and filter by id */
  getemployee(): void {
    console.log(1);
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getDummies()
       .subscribe(dummy => this.employee = dummy.data.find(item => item.id == id));
  }


  goBack(): void {
    this.location.back();
  }


}
