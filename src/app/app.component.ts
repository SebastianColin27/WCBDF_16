import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TirardadoComponent } from "./tirardado/tirardado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TirardadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio16';
}
