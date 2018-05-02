import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
Name:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }


  openPlayer(){
    this.navCtrl.push("PlayersPage")
   }

   openCamera(){
     this.navCtrl.push("CameraPage")
   }

   openSettings(){
     this.navCtrl.push("SettingsPage")
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter(){
    this.storage.get("Name").then((data)=>{
      this.Name=data;
    })
    .catch((err)=>{
      console.log("Database Retrievel Error")
    })
  }
}
