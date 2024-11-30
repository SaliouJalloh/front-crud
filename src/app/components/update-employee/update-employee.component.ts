import {Component, inject, OnInit} from '@angular/core';
import {Employee} from '../../models/employee';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {EmployeeService} from "../../services/employee-service.service";

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss',
})
export class UpdateEmployeeComponent implements OnInit {
  private employeeService = inject(EmployeeService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id!: number;
  employee: Employee = new Employee();

  constructor() {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    // this.employeeService.getEmployeeById(this.id).subscribe({
    //   next: (data) => (this.employee = data),
    //   error: (error) => console.log(error),
    // });
  }

  onSubmit() {
    // this.employeeService.updateEmployee(this.id, this.employee).subscribe({
    //   next: () => this.goToEmployeeList(),
    //   error: (error) => console.log(error),
    // });
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
