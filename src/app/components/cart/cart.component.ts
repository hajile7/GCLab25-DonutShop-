import { Component } from '@angular/core';
import { DonutDetailModel } from '../../models/donut-detail';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart:DonutDetailModel[];
  totalPrice:number = 0;
  totalCals:number = 0;

  constructor(private cartService:CartService) {
    this.cart = this.cartService.getCart();
    this.calculateTotals();
  }

  removeFromCart(index:number):void {
    this.cart.splice(index, 1);
    this.cartService.setCart(this.cart);
    this.calculateTotals();
  }

  private calculateTotals() {
    this.totalPrice = this.cart.length
    this.totalCals = this.cart.reduce((total, item) => total + item.calories, 0);
  }

}
