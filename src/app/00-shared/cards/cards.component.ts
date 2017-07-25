import { Component, OnInit, AfterContentInit } from '@angular/core';
import {Router} from '@angular/router';
import {PROJECTS} from '../../../mock-data/project-data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, AfterContentInit {
  projects: any[] = [];
  curRoutePath: string = '/home';

  constructor(private router: Router) {}

  ngOnInit() {
    this.projects = PROJECTS;
    let type = this.router.url.substr(1);
    this.changeData(type);
  }

  ngAfterContentInit(): void {
    if (location.pathname === '/') {
      this.curRoutePath = '/home';
    } else {
      this.curRoutePath = location.pathname;
    }
  }

  navigatorTo(routerLink: string) {
    this.router.navigateByUrl(routerLink);
  }

  changeData(type: string) {
    this.projects = this.filterPro(type);
  }

  filterPro(type: string): any[] {
    if (!type) {
      return PROJECTS;
    }
    return PROJECTS.filter(item => {
      return item.type.includes(type);
    });
  }
}
