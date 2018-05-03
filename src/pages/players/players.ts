import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlayerInfoProvider } from '../../providers/player-info/player-info';

/**
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {
  //arrays to store the players from json 
  players:any[]=[];
  filterPlayer:any[]=[];
//Dependency injection
  constructor(public navCtrl: NavController, public navParams: NavParams,private pi:PlayerInfoProvider) {
  }
  //variables to store the nme of the fighters
  name:string="";
  n:string="";
  //wheneve this page is open run this function
  ionViewDidLoad() {
    //get all the data from the json and assing it to the array called players
   this.pi.getPlayerInfo().subscribe(data=> {
     this.players=data.Player;
     //and copy players array to the filterPlayer
     this.filterPlayer=this.players;
   })
  }


  firstName()
  {
    this.n=this.name;
  }
  //serch the player based on thier first name from filterPlayer
  setFilterdPlayer(){
    this.filterPlayer=this.players.filter((firstName)=>{
      return firstName.first_name.toLowerCase().indexOf(this.name.toLowerCase())> -1;
    });
  }
}