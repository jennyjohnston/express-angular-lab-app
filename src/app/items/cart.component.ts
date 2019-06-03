import { Component } from '@angular/core';
import { Api } from '../services/api.service';
import { Router } from '@angular/router';

interface Items {
  id: string;
  product: string;
  price: string;
  quantity: string;
}

interface ApiData {
  data: Items[];
}

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: []
})

export class CartComponent {
  title = 'cart-component';
  list: Items[];
  errorMessage: string;

  constructor(private api: Api, private router: Router) {}

  //CartService
  getAllItems = () => {
    this.api.getFact().subscribe(data => console.log(data));
    this.api.getItems().subscribe(
        (data: ApiData) => {
          this.list = data.data;
        },
        error => {
            this.errorMessage = error.message;
        }
        );
    };
}
