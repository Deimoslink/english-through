import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
  })
  export class CompanyComponent implements OnInit {

  public courses: any = [1,2,3,4];

  constructor() {}

  ngOnInit() {
    console.log('Hello from company.component!')
  }

}
