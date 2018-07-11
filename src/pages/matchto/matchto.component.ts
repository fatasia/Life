import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-matchto',
  templateUrl: './matchto.component.html',
  styleUrls: ['./matchto.component.scss']
})
export class MatchtoComponent implements OnInit {

  user = {
    icon: './assets/images/icon_default.png',
    name: '呵呵呵',
    sex: 0,
    birthdayType: 0,
    birthdayDate: '',
    birthdayTime: ''
  };


  constructor() {
  }

  ngOnInit() {
  }

  onMatch() {

  }

}
