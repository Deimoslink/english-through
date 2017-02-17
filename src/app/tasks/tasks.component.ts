import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {CounterRefreshService} from "../service/counter-refresh.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

@Injectable()
export class TasksComponent implements OnInit {

  public tasksCounter: any = {
    'new':0,
    'active':0,
    'pending':0,
    'finished':0,
    'canceled':0,
    'drafts':0
  }

  constructor(public http: Http,
              private _refreshCounter: CounterRefreshService) {
    _refreshCounter.changeEmitted$.subscribe(
      type => {
        this.tasksCounter[type]--;
      });
  }

  requestData() {
    this.http.get('http://localhost:3000/tasks').map((res: Response) => res.json()).subscribe(
      (res: any) => {
        for (let task of res) {
          this.tasksCounter[task.Status]++;
        }
      },
      err => {
        console.log(err);
        //this.processingErrorStatus(err, callbackErr);
      }
    );
  }

  ngOnInit() {

    this.requestData();

  }

}
