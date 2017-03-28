import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  public courseList:any = ['first','second','third', 'forth', 'fifth'];

  constructor() {

  }

  ngOnInit() {

  }

}
