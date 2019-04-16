import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user: firebase.User;

  constructor(private FireBaseAuth: AngularFireAuth) { }

  ngOnInit() {
    this.FireBaseAuth.authState
      .subscribe(u => {
        console.log(u);
        this.user = u;
    });
  }
}
