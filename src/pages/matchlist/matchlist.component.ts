import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../app/BaseComponent';

@Component({
  selector: 'app-matchlist',
  templateUrl: './matchlist.component.html',
  styleUrls: ['./matchlist.component.scss']
})
export class MatchlistComponent extends BaseComponent implements OnInit {

  userList = [
    {
      date: '2018-04-05', list: [
        {id: 0, icon: './assets/images/icon_default.png', name: '呵呵呵', status: [true, false, true, false]},
        {id: 0, icon: './assets/images/icon_default.png', name: '呵呵呵', status: [true, false, true, false]},
        {id: 0, icon: './assets/images/icon_default.png', name: '呵呵呵', status: [true, false, true, false]},
        {id: 0, icon: './assets/images/icon_default.png', name: '呵呵呵', status: [true, false, true, false]},
      ]
    }, {
      date: '2018-04-04', list: [
        {id: 0, icon: './assets/images/icon_default.png', name: '呵呵呵', status: [true, false, true, false]},
        {id: 0, icon: './assets/images/icon_default.png', name: '呵呵呵', status: [true, false, true, false]},
        {id: 0, icon: './assets/images/icon_default.png', name: '呵呵呵', status: [true, false, true, false]},
        {id: 0, icon: './assets/images/icon_default.png', name: '呵呵呵', status: [true, false, true, false]},
      ]
    },
  ];

  tab = 1;

  ngOnInit() {
  }

  onTab(type) {
    this.tab = type;
  }

  onItem(item) {
    this.router.Go_v2({path: 'match', id: item.id});
  }

  onMore(){

  }

}
