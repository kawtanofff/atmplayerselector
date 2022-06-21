import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { FootballRoutingModule } from './football-routing.module';
import { PlayerComponent, PlayerDetailsComponent, PlayerListComponent } from './components';


@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerComponent,
    PlayerDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule,
    FootballRoutingModule
  ]
})
export class FootballModule { }
