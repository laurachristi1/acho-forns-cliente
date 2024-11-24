import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsClienteComponent } from "./forms-cliente/forms-cliente.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario-cliente';
}
