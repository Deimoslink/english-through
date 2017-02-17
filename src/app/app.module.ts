import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { LoggedInGuard } from './app.guard';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';

import { UserService } from './service/user.service';
import { CounterRefreshService } from './service/counter-refresh.service';
import { TableComponent } from './table/table.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FinanceComponent } from './finance/finance.component';
import { StatisticsComponent } from "./statistics/statistics.component";
import { CompanyComponent } from "./company/company.component";
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    CompanyComponent,
    TasksComponent,
    LoginComponent,
    TableComponent,
    SortByPipe,
    SearchPipe,
    FilterPipe,
    FinanceComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService, CounterRefreshService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
