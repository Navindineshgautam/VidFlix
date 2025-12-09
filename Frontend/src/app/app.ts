import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Content } from './components/content/content';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, Content]
})
export class App {

}
