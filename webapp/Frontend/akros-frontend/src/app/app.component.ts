import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,     FormsModule // Add FormsModule to imports
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AKROS-Frontend';

 constructor() {}

  onClickMe(){
    console.log("EST");
  window.location.href = 'http://localhost:8889/greet';

    }
}




