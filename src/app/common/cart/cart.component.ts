import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  @Input() domRegInBasket: string = '';
  //domRegInBasket: string = '';
  basket: number = 0;
  cartList$: Observable<any> = this.cartService.getAll();
  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

}
