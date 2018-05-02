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
  players:any[]=[];
  filterPlayer:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private pi:PlayerInfoProvider) {
  }
  name:string="";
  n:string="";
  ionViewDidLoad() {
   this.pi.getPlayerInfo().subscribe(data=> {
     this.players=data.Player;
     this.filterPlayer=this.players;
   })
  }


  firstName()
  {
    this.n=this.name;
  }
  
  setFilterdPlayer(){
    this.filterPlayer=this.players.filter((firstName)=>{
      return firstName.first_name.toLowerCase().indexOf(this.name.toLowerCase())> -1;
    });
  }
}