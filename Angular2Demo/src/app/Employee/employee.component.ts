import { Component } from '@angular/core';

@Component({
    selector: "my-employee",
    templateUrl: "app/Employee/employee.component.html",
    styleUrls: ["app/Employee/employee.component.css"]
})

export class EmployeeComponent {
    firstName: string = "Tom";
    lastName: string = "Hoplins";
    gender: string = "Neutral";
    age: string = "120";
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}