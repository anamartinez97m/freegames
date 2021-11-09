import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game: any;
  @Output() favorite = new EventEmitter();

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
  }

  // addToFavorites(game: any) {
  //   this.favorite.emit(game);
  // }

  // removeFromFavorites(game: any) {
  //   this.favorite.emit(game);
  // }

  addToFavorites(game: any) {
    this.favoritesService.addGameToFavorites(game);
  }

  removeFromFavorites(game: any) {
    this.favoritesService.removeFromFavorites(game);
  }

  isFavorite(game: any) {
    return this.favoritesService.isFavorite(game);
  }

}
