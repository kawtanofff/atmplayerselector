import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'any'
})
export class PlayerService {
  private baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getPlayers(): Promise<Player[] | undefined> {
    return this.http.get<Player[]>(this.baseUrl + 'players').toPromise();
  }

  getPlayer(id: NonNullable<Player['id']> | string ): Promise<Player | undefined> {
    console.log('Called');
    return this.http.get<Player>(this.baseUrl + 'players/' + id).toPromise().catch(() => Promise.reject('Error in getPlayer method'));
  }
}
