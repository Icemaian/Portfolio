import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  workTitle = 'Software Developer and Analyst';
  workPlace = 'Honda Manufacturing of Indiana';
  constructor() { }

  ngOnInit(): void {
  }

}
