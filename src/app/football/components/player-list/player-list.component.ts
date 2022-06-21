import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  players!: Player[];
  searchValue: string = '';

  constructor(private router: Router, private playerService: PlayerService) {}

  get filteredPlayers(): Player[] { return this.players?.filter(x => (x.firstName + ' ' + x.lastName).toLowerCase().includes(this.searchValue.toLowerCase())); }

  async ngOnInit(): Promise<void> {
    const response = await this.playerService.getPlayers();
    this.players = response ? response : [];
    this.sortByAge();
  }

  onPlayerClick(player: Player): void {
    const link = ['/player', player.id];
    this.router.navigate(link);
  }

  sortByAge(): void {
    this.players = this.players.sort((x, y) => y.age - x.age);
  }

  sortByRating(): void {
    this.players = this.players.sort((x, y) => y.rating - x.rating);
  }

}
