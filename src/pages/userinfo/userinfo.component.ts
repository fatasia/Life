import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../app/BaseComponent';
// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent extends BaseComponent implements OnInit {

  user = {
    icon: './assets/images/icon_default.png',
    name: '呵呵呵',
    sex: 0,
    birthdayType: 0,
    birthdayDate: '',
    birthdayTime: ''
  };



  ngOnInit() {

    $('#pickdate').dateDropper({
      animate: false,
      format: 'Y-m-d',
      maxYear: '2020'
    });
    $('#picktime').timeDropper({
      meridians: false,
      format: 'HH:mm',
    });
  }

  onChange(type, value) {
    if (type === 0) {
      this.user.sex = value;
    } else {
      this.user.birthdayType = value;
    }
  }

  onNext() {
    this.router.Go_v2({path: 'share', id: this.getId()});
  }
}
