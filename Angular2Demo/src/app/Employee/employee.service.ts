import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable()


export class EmployeeService {
    getEmployees(): IEmployee[] {
        return [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
            { code: 'emp105', name: 'Boc', gender: 'Neutral', annualSalary: 10500.826, dateOfBirth: '10/01/1780' },
            { code: 'emp106', name: 'Mark', gender: 'Male', annualSalary: 100.826, dateOfBirth: '01/01/2080' }
        ];
    }
}