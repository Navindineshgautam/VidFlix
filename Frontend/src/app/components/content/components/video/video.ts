import { Component } from '@angular/core';

import { WindowService } from '../../../../services/window/window.service';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.html',
  styleUrl: './video.css',
})
export class Video {
  public constructor(public windowService: WindowService) {}
}
