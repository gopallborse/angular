import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  // template: '<h1>The Header</h1>'
  templateUrl: './header.component.html',
  // styles: ['h1 { color: red }'],
  // styleUrls: ['./header.component.css'],
  styleUrl: './header.component.css', // doesn't exist for older version of Angular
})
export class HeaderComponent {}
