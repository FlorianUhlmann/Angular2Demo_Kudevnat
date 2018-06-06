import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeeListComponent } from './Employee/employeeList.component';
import { EmployeeTitelPipe } from './Employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './Employee/employeeCount.component';
import { SimpleComponent } from './Others/simple.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitelPipe, EmployeeCountComponent, SimpleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
