import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'employees',
    loadComponent: () =>
      import('./components/employee-list/employee-list.component').then(
        (m) => m.EmployeeListComponent
      ),
  },
  {
    path: 'create-employee',
    loadComponent: () =>
      import('./components/create-employee/create-employee.component').then(
        (m) => m.CreateEmployeeComponent
      ),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'update-employee/:id',
    loadComponent: () =>
      import('./components/update-employee/update-employee.component').then(
        (m) => m.UpdateEmployeeComponent
      ),
  },
  {
    path: 'employee-details/:id',
    loadComponent: () =>
      import('./components/employee-details/employee-details.component').then(
        (m) => m.EmployeeDetailsComponent
      ),
  },
];
