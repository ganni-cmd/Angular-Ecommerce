import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId = 0;
  productData: Product;
  alert: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private productservice: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;

      this.productservice.getProductById(this.productId).subscribe(data => {
        this.productData = data;
      });
    });
  }


  updateProduct(form) {
    console.log(form.value);


    let updateProduct = {
      "categoryId": form.value.productCategory,
      "productName": form.value.productName,
      "description": form.value.productDescription,
      "rating": form.value.productRating,
      "price": form.value.productPrice,
      "productImg": form.value.productImage,
      "isAvailable": form.value.productAvailable,
      "color": form.value.productColor,
      "reviews": form.value.productReview
    }

    this.productservice.updateProduct(this.productId, updateProduct).subscribe(data => {
      this.productData = data;

      this.redirectTo();

    });



  }
  redirectTo() {
    this.router.navigate(['/products']);
  }



}

