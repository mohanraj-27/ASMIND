import { Component, OnInit} from '@angular/core';
import { HttpClientService} from '../service/httpclient.service';

@Component({
  selector: 'app-deductions',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.css']
})
export class DeductionsComponent implements OnInit {
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





