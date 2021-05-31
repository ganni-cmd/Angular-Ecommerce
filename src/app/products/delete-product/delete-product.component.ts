import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productId = 0;
  alert: Boolean = false;

  constructor(private activatedroute: ActivatedRoute, private productservice: ProductService,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedroute.params.subscribe(data => {
      this.productId = data.id;
    });

    this.productservice.deleteProduct(this.productId).subscribe(data => {
      console.log("data deleted", data);
      this.alert = true;
      this.redirectTo();

    });

  }
  close() {
    this.alert = false;

  }

  redirectTo() {
    this.router.navigate(['/products']);
  }

}
