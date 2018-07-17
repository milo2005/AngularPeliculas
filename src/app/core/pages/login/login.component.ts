import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  error = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['estrenos']);
    } else {
      this.error = true;
      setTimeout(() => this.error = false, 1000);
    }
  }

}
