import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../layouts/private/header/header';

@Component({
  selector: 'app-private',
  imports: [Header, RouterOutlet],
  templateUrl: './private.html',
  styleUrl: './private.css',
})
export class Private {

}
