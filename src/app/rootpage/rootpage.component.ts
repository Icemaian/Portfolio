import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rootpage',
  templateUrl: './rootpage.component.html',
  styleUrls: ['./rootpage.component.css']
})
export class RootpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getURL() {
    return "url(IMCPortfolio\src\assets\img\fallen.jpg)";
  }
}
