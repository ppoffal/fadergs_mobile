import { Component } from '@angular/core';

import { UsersPage } from '../users/users';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usrPage = UsersPage;
  
  constructor (private navCtrl: NavController){}
  
  onGoToUsers() {
    this.navCtrl.push(this.usrPage)
    .catch((error) => console.log ('Acess denied, Argument was ' + error));
  }
}

