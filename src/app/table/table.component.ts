import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Http, Response } from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {CounterRefreshService} from "../service/counter-refresh.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

@Injectable()

export class TableComponent implements OnInit {

  public search: string;
  public sortingField: string;
  public reverseSorting: boolean;
  public data: any;
  public postResponse: any;
  public router: any;
  public filterConditions: Array<boolean> = [false,false,false]; //Personal, Night, Urgent

  // Schema for http://beta.json-generator.com
  // [
  //   {
  //     'repeat(100)': {
  //       id: '{{index()}}',
  //       Loc: '{{random("Самара", "Москва", "Санкт-петербург", "Тверь", "Казань", "Уфа", "Новосибирск", "Нижний Новгород", "Тольятти", "Сочи", "Владивосток", "Красноярск", "Архангельск")}}',
  //       Body: '{{lorem(1, "paragraphs")}}',
  //       Deadline: '{{date(new Date(2014, 0, 1), new Date()).getTime()}}',
  //       Urgent: '{{bool()}}',
  //       Night: '{{bool()}}',
  //       Personal: '{{bool()}}',
  //       Price: '{{integer(1000, 100000)}}',
  //       Status: '{{random("new", "active", "pending", "finished", "canceled", "drafts")}}'
  //     }
  //   }
  //   ]


  constructor(private http: Http,
              private _router: Router,
              private _refreshCounter: CounterRefreshService) {
    this.router = _router;
  }

  sortTable(event, Field) {
    event.preventDefault();
    this.sortingField = Field;
    this.reverseSorting = !this.reverseSorting;
  }

  // deleteCurrent(event, item, i) {
  //   event.preventDefault();
  //   let answer = confirm("Are you sure you want to delete the selected item?");
  //   if (answer) {
  //     this.http.delete('http://localhost:3000/tasks/' + item.id).subscribe(
  //       (res) => {
  //         this.data.splice(i, 1);
  //       },
  //       (err) => {console.log(err)}
  //       );
  //   }
  // }

  deleteCurrent(event, item) {
    event.preventDefault();
    let answer = confirm("Are you sure you want to delete the selected item?");
    if (answer) {
      this.http.delete('http://localhost:3000/tasks/' + item.id).subscribe(
        (res) => {
          let index = this.data.indexOf(item);
          this.data.splice(index, 1);
          console.log(res);
          this._refreshCounter.emitChange(item.Status);
        },
        (err) => {
          console.log(err)
        }
      );
    }
  }


  // deleteCurrent(event, item, i) {
  //   event.preventDefault();
  //
  //   this.data.splice(i, 1);
  //
  // }


  requestData(state) {
      this.http.get('http://localhost:3000/tasks?Status='+state).map((res: Response) => res.json()).subscribe(
        (res: any) => {
          this.data = res;
        },
        err => {
          console.log(err);
          //this.processingErrorStatus(err, callbackErr);
        }
      );
  }

  addItem(item) {
    this.http.post('http://localhost:3000/items/',item).map((res: Response) => res.json()).subscribe(
      (res: any) => {
        this.postResponse = res;
        this.data.push(res);
      },
      err => {
        console.log(err);
        //this.processingErrorStatus(err, callbackErr);
      }
    );
  }

  ngOnInit() {
    let requestedState = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    this.requestData(requestedState);
  }

}
