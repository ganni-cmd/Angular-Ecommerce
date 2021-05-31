import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId = 0;
  productData: Product;
  constructor(private activatedRoute: ActivatedRoute, private productservice: ProductService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;
    });

    this.productservice.getProductById(this.productId).subscribe(data => {
      this.productData = data;
    });

  }
}
