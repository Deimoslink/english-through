import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public dropdownView: boolean = false;
  public thereAreNotifications:boolean = true;

  constructor(private router: Router) {

  }

  toggleDropdown(event){
    event.preventDefault();
    this.dropdownView = !this.dropdownView
  }

  logout(event) {
    event.preventDefault();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  public authenticated() {
    return !!localStorage.getItem('user');
  };

  toggleNotifications(event){
    event.preventDefault();
    this.thereAreNotifications = !this.thereAreNotifications;
  }

}
