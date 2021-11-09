import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoritesService } from 'src/app/services/favorites.service';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  subscriptions: Subscription[] = [];
  gameList: any;

  constructor(
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.gameList = this.gamesService.getGameList();

    // this.subscriptions.push(
    //   this.gamesService.getGameListFromAPI().subscribe((response: any) => {
    //     this.gameList = response;
    //   })
    // );
  }

  // ngOnDestroy(): void {
  //   for(const s of this.subscriptions) {
  //     s.unsubscribe();
  //   }
  // }

}
