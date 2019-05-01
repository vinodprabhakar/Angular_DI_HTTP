import { Component } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title: string = "CTS Application";
  user: string = "";

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.loadUser();
  }

  private loadUser() {
    this.userservice.cast.subscribe(user => this.user = user);
  }
}
