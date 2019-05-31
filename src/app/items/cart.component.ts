import { Component } from '@angular/core';
import { Api } from '../services/api.service';
import { Router } from '@angular/router';

interface ApiData {
  id: string;
  product: string;
  price: string;
  quantity: string;
}

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: []
})

export class CartComponent {
  title = 'cart-component';
  list: ApiData[];
  errorMessage: string;

  constructor(private api: Api, private router: Router) {}

  //CartService
  getAllItems = () => {
    this.api.getFact().subscribe(data => console.log(data));
    this.api.getItems().subscribe(
        (data: ApiData) => {
        },
        error => {
            this.errorMessage = error.message;
        }
        );
    };
}
