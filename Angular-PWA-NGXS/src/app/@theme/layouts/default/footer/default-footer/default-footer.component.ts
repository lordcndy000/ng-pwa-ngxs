import { Component, OnInit } from '@angular/core';
import { pages } from './../../../../../@core/constants/menu';

@Component({
  selector: 'app-default-footer',
  templateUrl: './default-footer.component.html',
  styleUrls: ['./default-footer.component.css']
})
export class DefaultFooterComponent implements OnInit {

  public menuCfg = pages.mainNav;

  constructor() { }

  ngOnInit() {
  }

}
