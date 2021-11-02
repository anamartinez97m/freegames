import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game: any;
  @Output() favorite = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToFavorites(game: any) {
    this.favorite.emit(game);
  }

}
