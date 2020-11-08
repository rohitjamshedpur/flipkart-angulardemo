import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productlist:Product[]=[]
  wishlist:number[]=[]

  constructor(private productservices: ProductService, private wishListServices: WishlistService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishList();
    
  }

  loadProducts(){
    this.productservices.getProducts().subscribe((products)=>{
    this.productlist=products;
    })
  }
  loadWishList(){
    this.wishListServices.getWishList().subscribe(productIds => {
      this.wishlist=productIds;
      console.log(this.wishlist);
    })
  }


}
