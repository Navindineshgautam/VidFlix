import { Component } from '@angular/core';

import { Video } from './components/video/video';
import { WindowService } from '../../services/window/window.service';

@Component({
  selector: 'app-content',
  imports: [Video],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  public dummyVideos: number[] = [...Array(50).keys()]

  public constructor(public windowService: WindowService) {}
}
