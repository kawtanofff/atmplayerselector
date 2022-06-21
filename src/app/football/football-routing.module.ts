import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerDetailsComponent, PlayerListComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: PlayerListComponent
  },
  {
    path: 'player/:playerID',
    component: PlayerDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FootballRoutingModule { }
