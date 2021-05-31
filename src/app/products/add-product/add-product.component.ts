import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productservice: ProductService) { }

  alert: boolean = false;
  ngOnInit(): void {
  }

  addNewProduct(form) {
    console.log(form.value);

    let addProduct = {

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
    this.productservice.addProduct(addProduct).subscribe(data => {
      this.alert = true;
      console.log(data);
    });

  }
  close() {
    this.alert = false;
  }



}
