import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../_services/account.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  register(): void {
    this.accountService.register(this.model).subscribe(
      (response) => {
        this.toastr.success('Registration succeeded');
        this.cancel();
      },
      (error) => this.toastr.error('Registration failed')
    );
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }
}
