import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  name = ""
  constructor (private activatedRoute:ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.name = this.activatedRoute.snapshot.params['id'];
  }
}
