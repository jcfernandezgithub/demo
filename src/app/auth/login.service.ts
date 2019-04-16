import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private FireBaseAuth: AngularFireAuth) { }

  login(){
    console.log('Redirecting to Google login provider');
    this.FireBaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(){
    this.FireBaseAuth.auth.signOut();
  }

  getLoggedInUser(){
    return this.FireBaseAuth.authState;
  }
}
