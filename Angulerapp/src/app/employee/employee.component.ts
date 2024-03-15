import { Component } from '@angular/core';
import { employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
employee_id=1;
first_name=`Ravi`;
last_name="Singh";
salary=50000;
dob="5/07/1988";
email="ravi.soft111@gmail.com";
handleClick(){
  console.log('Button Clicked')
}
}
