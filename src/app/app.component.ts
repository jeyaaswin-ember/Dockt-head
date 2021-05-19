import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dockt';

  ToggleNav() {
    const nav = document.getElementById("navs");
    nav?.classList.toggle("hide");
  }
}
