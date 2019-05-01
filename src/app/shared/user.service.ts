import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
private user = new BehaviorSubject<string>('Trainee');
cast = this.user.asObservable();

  constructor() { }
 
  changeUser(user) {
    this.user.next(user);
  }

}
