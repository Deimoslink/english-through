import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import { UserService } from "./service/user.service";

@Injectable()

export class LoggedInGuard implements CanActivate {

  constructor(private user: UserService, private router: Router) {

  }

  canActivate() {
    if (this.user.authenticated()) { return true; }
    this.router.navigate(['/login']);
    return false;
  }
}
