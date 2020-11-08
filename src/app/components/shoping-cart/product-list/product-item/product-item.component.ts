import { Component, OnInit ,Input} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { MessengerService} from 'src/app/services/messenger.service';
import  {CartService} from 'src/app/services/cart.service';
import { WishlistService} from 'src/app/services/wishlist.service'




@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem:Product;

  @Input() addedToWishlist : boolean;

  constructor(private msg : MessengerService, private cart:CartService, private wishlistService:WishlistService ) { }

  ngOnInit(): void {
  }

  handlerAddToCart(){
    this.cart.addProductToCart(this.productItem).subscribe(() =>{
    this.msg.sendmag(this.productItem)
    })
}

handlerAddToWishlist(){
  this.wishlistService.addToWishlist(this.productItem.id).subscribe(() =>{
    this.addedToWishlist=true;


  })

}

handlerRemoveList(){
  this.wishlistService.removeFromList(this.productItem.id).subscribe(()=>{
   this.addedToWishlist=false;

  })

}

}