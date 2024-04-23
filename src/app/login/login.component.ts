import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  username = "mohak"
  password=""
  invalidCredentials = 'Invalid credentials'
  isInvalidLogin = false

  constructor(private router : Router,
    private hardcodedAuthenticationService : HardcodedAuthenticationServiceService
  ){}

  ngOnInit(): void {
      
  }


  loginProcess(){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username]);
      this.isInvalidLogin = false;
    }else{
      this.isInvalidLogin = true;
    }
    
  }

  
}
