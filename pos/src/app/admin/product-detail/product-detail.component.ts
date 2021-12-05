import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product-list/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : Product = new Product();

  productId : number = 0;

  constructor(private activatedRoute : ActivatedRoute,private productService : ProductService) { }


  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.getProductById(this.productId);
  }

  getProductById(productId : number) : void {
    this.productService.getProductById(productId).subscribe(
      (product : Product) => {
        this.product = product;
      }
    )
  }

}
