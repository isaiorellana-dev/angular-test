import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  correo = localStorage.getItem('user')?.replace(/['"]+/g, '');

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }
}
