import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  public courseList:any = [];
  public courseListChunks = [];


  chunkify(data) {
    let chunkSize = 3;
    for (let i = 0; i < data.length; i += chunkSize) {
      this.courseListChunks.push(data.slice(i, i + chunkSize));
    }
  }

  constructor(private http:Http,) {

  }

  getCourses() {
    this.http.get('http://localhost:3000/courses')
      .map((res: Response) => res.json()).subscribe(
      (res: any) => {
        this.courseList = res;
        this.chunkify(this.courseList);
      }
    );
  }


  ngOnInit() {
    this.getCourses();
  }

}
