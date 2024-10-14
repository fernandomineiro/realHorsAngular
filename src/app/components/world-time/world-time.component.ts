import { Component, OnInit } from '@angular/core';
import { WorldTimeService } from 'src/app/services/world-time.service';

@Component({
  selector: 'app-world-time',
  templateUrl: './world-time.component.html',
  styleUrls: ['./world-time.component.css']
})
export class WorldTimeComponent implements OnInit {
  currentTime: any;

  constructor(private worldTimeService: WorldTimeService) {}

  ngOnInit(): void {
    this.worldTimeService.getTimeUpdates().subscribe(
      (data: any) => {
        this.currentTime = data;
        console.log('Updated time:', data);
      },
      (error) => {
        console.error('Error receiving WebSocket data:', error);
      }
    );
  }
}