import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any = {login:{},signup:{}};
  wantToSignUp: boolean = false;

  constructor(private router:Router, private http:Http) { }

  toggleView(event) {
    event.preventDefault();
    this.wantToSignUp = !this.wantToSignUp;
  }

  checkUser() {
      this.http.get('http://localhost:3000/users?Name='+this.data.login.username+'&Password='+this.data.login.password)
        .map((res: Response) => res.json()).subscribe(
        (res: any) => {
          if (res.length < 1) {alert('Go away, you are not welcome here!'); return false}
          alert('Welcome, '+this.data.login.username);
          localStorage.setItem('user', this.data.login.username);
          this.router.navigate(['/tasks']);
        },
        err => {
          alert('Go away, you are not welcome here!');
        }
      );
  }

  signUp() {

      this.http.post('http://localhost:3000/users/', {"Name": this.data.signup.username,"Password": this.data.signup.password}).map((res: Response) => res.json()).subscribe(
        (res: any) => {
          alert('Now you can login, '+this.data.signup.username);
          this.wantToSignUp = false;
          this.data = {login:{},signup:{}};
        },
        err => {
          console.log(err);
        }
      );

  }

  public authenticated() {
    return !!localStorage.getItem('user');
  };

  ngOnInit() {
    if (this.authenticated()) {this.router.navigate(['/tasks']);}
  }

}
