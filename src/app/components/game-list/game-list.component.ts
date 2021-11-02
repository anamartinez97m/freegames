import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  gameList: any[];

  constructor(private gamesService: GamesService) {
    this.gameList = this.gamesService.getGameList();
   }

  ngOnInit(): void {
  }

  hello() {
    console.log('hello');
  }

  addToFavorites(game: any) {
    console.log('Quiero añadir a favoritos ${game.title}');
  }
}
