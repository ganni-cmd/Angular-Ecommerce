
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/layout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  getId: Category;
  productList: Product;

  constructor(private activatedroute: ActivatedRoute, private productservice: ProductService) { }

  ngOnInit(): void {

    this.activatedroute.params.subscribe(data => {
      this.getId = data.id;
    });

    this.productservice.searchByCategory(this.getId).subscribe(data => {
      this.productList = data;
      console.log(this.productList);

    });



  }

}
