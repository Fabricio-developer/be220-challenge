import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from "firebase/compat/app";
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  error: any;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.currentUserSubject.next({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        });
      } else {
        this.currentUserSubject.next(null);
      }
    });
  }

  async emailSignin(emali: string, password: string) {
    try {
      const credential = await this.auth.signInWithEmailAndPassword(emali, password);
      this.user = credential.user;
    } catch (error) {
      this.error = error;

    }
  }

  async googleSignin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.auth.signInWithPopup(provider);

      this.user = credential.user;

      if (credential.user) {
        let user = credential.user;
        this.currentUserSubject.next({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        });
      } else {
        this.currentUserSubject.next(null);
      }



    } catch (error) {
      this.error = error;
    }
  }

  async signOut() {
    await this.auth.signOut();
    this.user = null;
  }
}
