import { Injectable } from '@angular/core';
import { wishListUrl} from 'src/app/config/api';
import { HttpClient} from '@angular/common/http';
import { Product } from '../models/product';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http : HttpClient) { }

  addToWishlist(productId){
    return this.http.post(wishListUrl,{id:productId})

  }
  getWishList(){
    return  this.http.get(wishListUrl).pipe(
      map((result: any[])=>{
        let productIds=[]
        result.forEach(item => productIds.push(item.id))
        return productIds;

      })


    )

  }
  removeFromList(productId){
    return this.http.delete(wishListUrl + '/'+ productId);

  }


}
