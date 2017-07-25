import { Component, OnInit, AfterViewInit } from '@angular/core';
import {TabMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit, AfterViewInit {
  items: MenuItem[];
  activeItem: MenuItem;
  events: any[];
  tabIndex: number = 0;
  $tabUl: any;
  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Cards', icon: 'fa-support'},
      {label: 'Table', icon: 'fa-bar-chart'},
      {label: 'Calendar', icon: 'fa-calendar'}
    ];
  }

  ngAfterViewInit() {
    this.$tabUl = $('p-tabmenu ul');
    this.setTabMenuStyle();
    this.setEvents();
    this.setTabClickEvent();
  }

  setTabClickEvent() {
    const that = this;
    this.$tabUl.children().click(function() {
      that.tabIndex = $(this).index();
    });
  }

  setTabMenuStyle() {
    console.log(this.activeItem);
    this.$tabUl.css('backgroundColor', '#ddd')
      .children().filter('.ui-state-active').css('backgroundColor', '#f3f5f7')
      .siblings().css('backgroundColor', '#eee');
  }

  setEvents() {
    this.activeItem = this.items[2];
    this.events = [
      {
        "title": "All Day Event",
        "start": "2017-07-01"
      },
      {
        "title": "Long Event",
        "start": "2017-07-07",
        "end": "2017-07-10"
      },
      {
        "title": "Repeating Event",
        "start": "2017-07-09T16:00:00"
      },
      {
        "title": "Repeating Event",
        "start": "2017-07-16T16:00:00"
      },
      {
        "title": "Conference",
        "start": "2017-07-11",
        "end": "2017-07-13"
      }
    ];
  }
}
