import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WorldTimeService {
  private socket = webSocket('localhost:8080');

  constructor() { }

  getTimeUpdates() {
    return this.socket.asObservable();
  }
}