import { Injectable } from '@angular/core';

@Injectable()

export class UserService {

  public authenticated() {
    return !!localStorage.getItem('user');
  };

  constructor() {
  }

}
