import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/Employee/employeeList.component.html',
    styleUrls: ['app/Employee/employeeList.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit{
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = 'Loading Data.Please wait...';

    constructor(private _employeeService: EmployeeService) {  //dependency injection
    }
    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe((employeeDataSrvr) => this.employees = employeeDataSrvr,
            (error) => {
            this.statusMessage = 'Problem with the service, please try later again YEAHHHH';
            });   //liveHook to retrive data, (is favourable to constructor, because it waits)
    }


    onEmployeeCountButtonChange(selectedRadioButtonValue: string): void{
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }
    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e=>e.gender === "Male").length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

}