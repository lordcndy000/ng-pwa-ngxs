import { Component, OnInit } from '@angular/core';
import { pages } from './../../../../../@core/constants/menu';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css']
})
export class DefaultHeaderComponent implements OnInit {

  public isCartVisible = false;
  public cartContClass = 'header-cart header-dropdown';
  public isHamburgerActive = false;
  public menuCfg = pages.mainNav;

  constructor() { }

  ngOnInit() {

  }

  toggleCart() {

    this.isCartVisible = !this.isCartVisible;

    if (this.isCartVisible) {
      this.cartContClass = `header-cart header-dropdown show-header-dropdown`;
    } else {
      this.cartContClass = `header-cart header-dropdown`;
    }

  }

  toggleHamburgerMenu() {
    this.isHamburgerActive = !this.isHamburgerActive;
  }

}
