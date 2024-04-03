import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


/*employee:Employee[];
//selectedemployee:Employee[];
//constructor(){}
ngOnInit() {
  this.employee=[
    
    {*/
      Employee_ID=1;
      First_Name='Ravi';
      Last_Name='Singh';
      Salary=50000;
      DOB='5/07/1988';
      Email='ravi.soft111@gmail.com';
 /* }
]
}*/

handleClick(){
  console.log('Button Clicked')
}
}
