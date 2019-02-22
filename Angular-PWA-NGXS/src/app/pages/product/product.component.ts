import { Component, OnInit } from '@angular/core';
import { SliderType } from 'igniteui-angular';
import { PriceRange } from '@core/model/common/priceRange';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(0, 9999);

  public bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  public updatePriceRange(event) {
    const prevPriceRange = this.priceRange;
    switch (event.id) {
      case 'lowerInput': {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(event.value, prevPriceRange.upper);
        }
        break;
      }
      case 'upperInput': {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(prevPriceRange.lower, event.value);
        }
        break;
      }
    }
  }

  open() {
    const initialState = {
      title: 'New Product'
    };
    this.bsModalRef = this.modalService.show(ProductFormComponent, { class: 'modal-dialog-centered', initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.saveBtnLabel = 'Save';
  }

}
