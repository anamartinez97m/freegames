import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public favoritesGamesList: any;
  public messages = {
    error: '¡En este momento no hay juegos favoritos! Añade un juego en la pantalla principal'
  };

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favoritesGamesList = this.favoritesService.getFavorites();
  }

  public isEmpty(favoritesList: any[]){
    return !favoritesList || favoritesList.length === 0;
  }

}
