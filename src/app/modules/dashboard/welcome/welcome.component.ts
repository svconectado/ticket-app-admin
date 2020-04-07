import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: []
})
export class WelcomeComponent implements OnInit {

  public header = {
    title: 'Dashboard',
    description: 'Tablero principal.'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
