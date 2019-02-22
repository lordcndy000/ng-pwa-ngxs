import { Component, OnInit, Input } from '@angular/core';
import { environment } from '@env/environment';
import { pages } from '../../../@core/constants/menu';


@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.css']
})
export class HeaderCartComponent implements OnInit {

  @Input() cartContClass: string;

  public menuPages = pages;
  public baseUrl = environment.apiResources.main.baseUrl;

  constructor() { }

  ngOnInit() {

  }

}
