import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: '', component: GameListComponent},
  {path: 'game-list', component: GameListComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
