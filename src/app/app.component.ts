import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { DemandeRv } from './features/demande-rv/demande-rv';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-projet';
}