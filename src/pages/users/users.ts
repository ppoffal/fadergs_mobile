import { Component, } from '@angular/core';
import {NavController} from "ionic-angular";
import { UserPage } from "./user/user";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor (private navCtrl: NavController){
  }

  onLoadUser(name: string){
    this.navCtrl.push(UserPage, {userName: name});
  }

  ionViewCanEnter(): boolean | Promise<any>{
    console.log('ionViewCanEnter');
    const rnd = Math.random();
    return rnd > 0.5;
        
  }
  ionViewDidLoad(){
    console.log('ionViweDidLoad');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewCanLeave(): boolean | Promise<void> {
    console.log('ionViewCanLeave');
    const promise = new Promise<void>((resolve, reject) => {
    setTimeout(() => {
    resolve();
    }, 1000);
    });
    return promise;
    }
}
