import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TableComponent } from "./table/table.component";
import { LoginComponent } from "./login/login.component";
import { TasksComponent } from "./tasks/tasks.component";

import { LoggedInGuard } from './app.guard';
import { FinanceComponent } from "./finance/finance.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {CompanyComponent} from "./company/company.component";
import {AddComponent} from "./add/add.component";


const APP_ROUTES: Routes = [
  { path: 'tasks', component: TasksComponent, canActivate: [LoggedInGuard],
    children: [
      {path: 'new', component: TableComponent},
      {path: 'active', component: TableComponent},
      {path: 'canceled', component: TableComponent},
      {path: 'finished', component: TableComponent},
      {path: 'pending', component: TableComponent},
      {path: 'drafts', component: TableComponent}
    ]},
  { path: 'statistics', component: StatisticsComponent, canActivate: [LoggedInGuard] },
  { path: 'company', component: CompanyComponent, canActivate: [LoggedInGuard] },
  { path: 'finance', component: FinanceComponent, canActivate: [LoggedInGuard] },
  { path: 'add', component: AddComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'tasks/active', pathMatch: 'full' }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
