import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  opened = false;

  u: firebase.User;

  constructor(private service: LoginService, private spinner: NgxSpinnerService) { }

  async ngOnInit() {
    this.spinner.show();
    await this.service.getLoggedInUser().subscribe(x => {
      this.u = x;
    this.spinner.hide();
    });
  }

  async loginWithGoogle() {
    this.spinner.show();
    await this.service.login();
  }

  async logout() {
    this.spinner.show();
    await this.service.logout();
  }
}
