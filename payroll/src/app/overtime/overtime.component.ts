import { Component, OnInit} from '@angular/core';
import { HttpClientService} from '../service/httpclient.service';

@Component({
  selector: 'app-overtime',
  templateUrl: './overtime.component.html',
  styleUrls: ['./overtime.component.css']
})
export class OvertimeComponent implements OnInit {
  public Employees=[];

  constructor(
    private httpClient: HttpClientService
  ) { }
 

  ngOnInit() {
    this.httpClient.getEmployees().subscribe(
      data => this.Employees = data);
    };

     deleteEmployee(employee): void {
      this.httpClient.deleteEmployee(employee)
        .subscribe( data => {
          this.Employees = this.Employees.filter(u => u !== employee);
        })
    };
  }


