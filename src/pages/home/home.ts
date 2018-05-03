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
  //variable to store the name from settings page
Name:string;
//Dependency injection in order to use the storage
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

//open players page
  openPlayer(){
    this.navCtrl.push("PlayersPage")
   }
//open camera page
   openCamera(){
     this.navCtrl.push("CameraPage")
   }
//open settings page
   openSettings(){
     this.navCtrl.push("SettingsPage")
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
//get the name from settings page and assings to the local variable
  ionViewWillEnter(){
    this.storage.get("Name").then((data)=>{
      this.Name=data;
    })
    .catch((err)=>{
      console.log("Database Retrievel Error")
    })
  }
}
