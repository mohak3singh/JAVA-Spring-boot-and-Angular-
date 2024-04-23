import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  name = '';

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];    
  }

}
