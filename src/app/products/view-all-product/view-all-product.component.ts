import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/layout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  allProducts: Product;

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {


    this.productservice.getAllProduct().subscribe(data => {
      this.allProducts = data;
    })
  }



}
