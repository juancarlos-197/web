import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  imports: [UserComponent, HeaderComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'angular-web';
}

