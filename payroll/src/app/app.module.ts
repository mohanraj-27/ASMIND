import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EmployeesComponent } from './employees/employees.component';
import { DeductionsComponent } from './deductions/deductions.component';
import { PositionsComponent } from './positions/positions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HomeComponent } from './home/home.component';
import { AddNewComponent,AddNewDialog} from './add-new/add-new.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule}from '@angular/material/form-field';
import {MatInputModule}from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatNativeDateModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';

import {HttpClientModule} from '@angular/common/http';
import { HttpClientService } from './service/httpclient.service';

import {FormsModule} from '@angular/forms';
import { PayrollComponent } from './payroll/payroll.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { OvertimeComponent } from './overtime/overtime.component';
import { CashAdvanceComponent } from './cash-advance/cash-advance.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { ListNewComponent, ListNewDialog } from './list-new/list-new.component';
import { TimeNewComponent,TimeNewDialog } from './time-new/time-new.component';
import { CashNewComponent,CashNewDialog } from './cash-new/cash-new.component';
import { DeductionNewComponent,DeductionNewDialog } from './deduction-new/deduction-new.component';
import { PositionNewComponent,PositionNewDialog } from './position-new/position-new.component';
@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    EmployeesComponent,
    DeductionsComponent,
    PositionsComponent,
    MainNavComponent,
    HomeComponent,
    AddNewComponent,AddNewDialog, PayrollComponent, ScheduleComponent, 
    EmployeelistComponent, OvertimeComponent, CashAdvanceComponent, SchedulesComponent,
     ListNewComponent,ListNewDialog, TimeNewComponent,TimeNewDialog,CashNewComponent,CashNewDialog, 
     DeductionNewComponent,DeductionNewDialog,PositionNewComponent,PositionNewDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,MatExpansionModule,HttpClientModule,
    MatListModule,MatDialogModule, MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatCardModule,
    MatInputModule,FormsModule,MatSelectModule,MatAutocompleteModule,MatRadioModule,MatProgressBarModule
  ],
  exports:[
    MatDatepickerModule
  ],
  providers: [MatDatepickerModule,MatNativeDateModule,HttpClientService ],
  bootstrap: [AppComponent],
  entryComponents:[AddNewComponent,AddNewDialog,ListNewComponent,
    ListNewDialog,TimeNewComponent,TimeNewDialog, CashNewComponent,CashNewDialog,
    DeductionNewComponent,DeductionNewDialog,PositionNewComponent,PositionNewDialog,PayrollComponent]
 
    
})
export class AppModule { }
