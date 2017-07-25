import { Component, OnInit } from '@angular/core';
import { SuggestService } from './suggest.service';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent implements OnInit {
  suggests: any = [];
  constructor(private suggestService: SuggestService) { }

  ngOnInit() {
    this.suggests = this.suggestService.getAllsuggest();
  }

}
