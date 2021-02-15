import { LoginDetails } from './../_models/logindetails';
import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: LoginDetails = {
    username: '',
    password: '',
  };

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {}

  login(): void {
    this.accountService.login(this.model).subscribe(
      (response) => {
        this.model.password = '';
      },
      (error) => {
        console.error(error);
      }
    );
  }

  logout(): void {
    this.model.username = '';
    this.accountService.logout();
  }
}
