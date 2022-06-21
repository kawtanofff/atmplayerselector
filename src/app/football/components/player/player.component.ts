import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {

  @Input() player!: Player;
  @Output() playerClicked = new EventEmitter<Player>();

  constructor() { }

  ngOnInit(): void {
  }

  onPlayerClick(): void {
    this.playerClicked.emit(this.player);
  }
}
