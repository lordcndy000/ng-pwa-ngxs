import { Product } from '@core/model/product/productRequestDTO';

export interface Cart {
    count: number;
    product: Product;
}
