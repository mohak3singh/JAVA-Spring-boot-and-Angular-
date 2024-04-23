import { DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id:number,
    public description:String,
    public done : boolean,
    public targetDate : Date
  ){

  }
}

@Component({
  selector: 'app-list-to-dos',
  standalone: true,
  imports: [NgFor, DatePipe , UpperCasePipe],
  templateUrl: './list-to-dos.component.html',
  styleUrl: './list-to-dos.component.css'
})

export class ListToDosComponent implements OnInit{

todos = [
  new Todo(1, "task 1",false,new Date()),
  new Todo(2, "task 2",false,new Date()),
  new Todo(3, "task 3",false,new Date()),
  new Todo(4, "task 4",false,new Date()),
  new Todo(5, "task 5",false,new Date()),
]

  ngOnInit(): void {
      
  }

}
