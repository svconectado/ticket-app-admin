import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ui-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public description?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
