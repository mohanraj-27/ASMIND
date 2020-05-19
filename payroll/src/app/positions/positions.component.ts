import { Component, OnInit} from '@angular/core';
import { HttpClientService} from '../service/httpclient.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
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



