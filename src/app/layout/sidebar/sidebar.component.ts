import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/products/product.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList: Category;
  constructor(private productservice: ProductService,
    private activateroute: ActivatedRoute,
    private router: Router) { }
  id: Category;
  ngOnInit(): void {

    this.activateroute.params.subscribe(data => {
      this.id = data.id;
    })
    this.productservice.getCategory().subscribe(data => {
      this.categoryList = data;
    })
  }



}
