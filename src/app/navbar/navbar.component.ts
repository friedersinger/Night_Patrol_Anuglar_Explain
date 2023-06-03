import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  classDiagram() {
    this.router.navigateByUrl('/uml');
  }

  home() {
    this.router.navigateByUrl('/home');
  }
}
