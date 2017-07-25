import {Component, OnInit, AfterContentInit} from '@angular/core';
import {NAVS} from '../mock-data/nav-data';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit{
  public navs: any[] = [];
  public navs2: any[] = [];
  public firstNav: any;

  public curRoutePath: string = '/home';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.navs = NAVS;
    const arr = [].concat(NAVS);
    this.firstNav = arr.shift();
    this.navs2 = arr;
  }

  ngAfterContentInit(): void {
    if (location.pathname === '/') {
      this.curRoutePath = '/home';
    } else {
      this.curRoutePath = location.pathname;
    }
  }

  navClick(path: string) {
    this.curRoutePath = path || '/home';
  }
}
