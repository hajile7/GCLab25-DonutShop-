import { Injectable } from '@angular/core';
import { DonutDetailModel } from '../models/donut-detail';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  userCart:DonutDetailModel[] = [];

  addByDonut(donut:DonutDetailModel):void {
    this.userCart.push(donut);
  }

  getCart() {
    return this.userCart;
  }

  setCart(cart:DonutDetailModel[]) {
    this.userCart = cart;
  }

}
