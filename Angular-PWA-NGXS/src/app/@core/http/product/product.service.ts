import { Injectable } from '@angular/core';
import { Product } from '@core/model/product/productRequestDTO';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiResources.main.apiUrl;

  constructor(private http: HttpClient) {

  }

  create(model: Product) {
    const productData = this.transformFormData(model);

    return this.http.post(`${this.apiUrl}/products`, productData);
  }

  private transformFormData(product: Product): FormData {

    const formData = new FormData();

    formData.append('name', product.name);
    formData.append('categoryId', product.categoryId);
    formData.append('brand', product.brand);
    formData.append('price', product.price.toString());
    formData.append('description', product.description);

    if (product.id !== '') {
      formData.append('id', product.id);
    }

    if (product.productImage) {
      formData.append('productImage', product.productImage);
    }


    return formData;
  }
}
