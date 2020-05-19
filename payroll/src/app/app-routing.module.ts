import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { EmployeesComponent } from './employees/employees.component';
import { DeductionsComponent } from './deductions/deductions.component';
import { PositionsComponent } from './positions/positions.component';
import { HomeComponent } from './home/home.component';
import { PayrollComponent } from './payroll/payroll.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { OvertimeComponent } from './overtime/overtime.component';
import { CashAdvanceComponent } from './cash-advance/cash-advance.component';
import { SchedulesComponent } from './schedules/schedules.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'deductions',component:DeductionsComponent},
  {path:'positions',component:PositionsComponent},
  {path:'payroll',component:PayrollComponent},
  {path:'schedule',component:ScheduleComponent},
  {path:'employeelist',component:EmployeelistComponent},
  {path:'overtime',component:OvertimeComponent},
  {path:'cashadvance',component:CashAdvanceComponent},
  {path:'schedules',component:SchedulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
