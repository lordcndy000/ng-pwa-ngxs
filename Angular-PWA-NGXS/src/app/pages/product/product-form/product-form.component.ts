import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '@core/model/category/category';
import { CategoryService } from '@core/http/category/category.service';
import { Product } from '@core/model/product/productRequestDTO';
import { ProductService } from '@core/http';
import { SnackbarService } from 'ngx-snackbar';
import { snackCfg } from '@core/config/snackbar.config';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public productForm: FormGroup;
  public filePath: string;
  public categories$: Observable<Category[]>;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private snackBar: SnackbarService
  ) { }

  ngOnInit() {
    this.categories$ = this.categoryService.loadAll();
    this.initializeForm();
  }

  initializeForm() {
    this.productForm = this.fb.group({
      name:  ['', [Validators.required, Validators.maxLength(50)]],
      categoryId: ['', [Validators.required]],
      brand: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(250)]],
      price: ['0', [Validators.required, Validators.maxLength(0)]],
      productImage: ['', [Validators.required]],
    });
  }

  get formControls() {
    return this.productForm.controls;
  }

  saveProduct() {
    const productModel: Product = this.productForm.value as Product;

    this.productService.create(productModel).subscribe(() => {
      this.bsModalRef.hide();

      this.snackBar.add({
        msg: '<strong>Product saved</strong>',
        timeout: 5000,
        background: snackCfg.success.background,
        color: snackCfg.success.color,
        action: {
          text: productModel.name
        }
      })
    });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      this.filePath = file.name;
      this.productForm.get('productImage').setValue(file)
    }
  }

  trackByFn(index, item) {
    return index;
  }
}
