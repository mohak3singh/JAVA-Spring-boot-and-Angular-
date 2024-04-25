import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  constructor(public hardcodedAuthenticationServiceService : HardcodedAuthenticationServiceService){

  }

  ngOnInit(): void {
    this.hardcodedAuthenticationServiceService.logout();
  }

}
