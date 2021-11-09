import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favoritesGameList: any = [];
  
  constructor() { 
    // this.favoritesGameList = localStorage.getItem('favoritesList') ? (JSON.parse(localStorage.getItem('favoritesList') || '{}')) : [];
    // this.favoritesGameList = [];
  }

  addGameToFavorites(game: any): void {
    this.favoritesGameList.push(game);
    // localStorage.setItem('favoritesList', JSON.stringify(this.favoritesGameList));
    console.log(this.favoritesGameList);
  }

  removeFromFavorites(game: any): void {
    
  }

  getFavorites(): any {
    return this.favoritesGameList;
  }

  isFavorite(game: any): boolean {
    return this.favoritesGameList.find(({id}: any) => {
      return game.id === id;
    });
  }
}
