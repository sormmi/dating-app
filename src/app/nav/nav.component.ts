import { LoginDetails } from './../_models/logindetails';
import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.accountService.login(this.model).subscribe(
      (response) => {
        this.model.password = '';
        this.router.navigateByUrl('/members');
      },
      (error) => {
        this.toastr.error('Login failed');
      }
    );
  }

  logout(): void {
    this.model.username = '';
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
