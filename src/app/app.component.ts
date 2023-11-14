import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'Boxy Store';

  irAHome() {
    this.router.navigate(['/home']);
  }

  goToUser() {
    this.router.navigate(['/user']);
  }
  goToClient() {
    this.router.navigate(['/client']);
  }
}
