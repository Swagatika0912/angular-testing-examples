import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing-examples';
  btnText = 'Subscribe';
  isSubscribed = false;
  Subscribe(){
    this.btnText = 'Subscribed';
  this.isSubscribed = true;

  }
}
