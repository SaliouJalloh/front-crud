import {Component, inject, OnInit} from '@angular/core';
import {Employee} from '../../models/employee';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from "../../services/employee-service.service";

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss',
})
export class EmployeeDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private employeeService = inject(EmployeeService);

  id!: number;
  employee: Employee = new Employee();

  constructor() {}

  ngOnInit(): void {
    //   this.id = this.route.snapshot.params['id'];
    //   this.employeeService.getEmployeeById(this.id).subscribe((data) => {
    //     this.employee = data;
    //   });
  }
}
