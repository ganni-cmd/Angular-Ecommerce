import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewProductComponent,
    ViewAllProductComponent,
    ViewProductByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class ProductsModule { }
