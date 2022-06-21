import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {
  player!: Player;

  constructor(private playerService: PlayerService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    const observer = {
      next: (player: Player) => (this.player = { ...player }),
      error: (err: any) => {
        console.log(err);
        const link = ['/PathNotFound'];
        this.router.navigate(link);
      }
    };

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.playerService.getPlayer(params.get('playerID')!)
        ),
        map(el => el ? el : {} as Player)
      )
      .subscribe(observer);
  }
}
