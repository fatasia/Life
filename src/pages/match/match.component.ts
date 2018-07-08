import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {


  user = {
    icon: './assets/images/icon_default.png',
    name: '呵呵呵',
    match: 80,
    date: '2018-09-09 18:30'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
