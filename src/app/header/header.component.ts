import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // isUserLoggedIn :Boolean= false;

  constructor(
    public hardcodedAuthenticationService : HardcodedAuthenticationServiceService
  ){}

  ngOnInit(): void {
      // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
