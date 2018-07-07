import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../app/BaseComponent';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent extends BaseComponent implements OnInit {


  user = {
    icon: './assets/images/icon_default.png',
    name: '呵呵呵',
    sex: 0,
    birthdayType: 0,
    birthdayDate: '',
    birthdayTime: ''
  };


  ngOnInit() {
  }

  onShare() {

  }

}
