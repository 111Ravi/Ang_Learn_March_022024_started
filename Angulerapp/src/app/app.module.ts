
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from'@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './AppRoutingModule'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'

@NgModule
({
    declarations:[
        AppComponent,
        EmployeeComponent 

    ],
    imports:[
BrowserModule,
FormsModule,
AppRoutingModule
    ],
    providers:[

    ],

    bootstrap:[AppComponent]

})
export class AppModule{}