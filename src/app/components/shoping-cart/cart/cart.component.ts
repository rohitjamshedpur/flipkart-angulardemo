import { Component, OnInit } from '@angular/core';
import { MessengerService} from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cartItem';
 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems=[
    // {id:1,productid:1,productname:"kk",qty:2,price:20},
    // {id:1,productid:1,productname:"kk",qty:3,price:100},
    // {id:1,productid:1,productname:"kk",qty:1,price:200},
    // {id:1,productid:1,productname:"kk",qty:5,price:2000}
  ];

  cartotal=0
  constructor(private msg:MessengerService, private cartService :CartService ) {

   }

   handlerSubscription(){
     this.msg.getmsg().subscribe((product :Product)=>{
       this.loadCartItems();
     })
   }



   ngOnInit():void {
    // this.msg.getmsg().subscribe((product:Product)=>{
    //  this.addTocartItem(product)
    // })
    this.handlerSubscription();
    this.loadCartItems();
   }

   loadCartItems(){
     this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems=items;
      this.cartToCalculate();

     }
     )

   }



  //   addTocartItem(product:Product){

  //     let productExist=false

  //     for ( let i in this.cartItems){
  //             if(this.cartItems[i].productid === product.id){
  //                this.cartItems[i].qty++
  //                productExist=true
  //                break;
  //             }
  //           }

  //           if (!productExist){
  //             this.cartItems.push({
  //                     productid:product.id,
  //                     productname:product.name,
  //                     qty:1,
  //                     price:product.price

  //           })
  //         }



  // //     if(this.cartItems.length === 0){
  // //       this.cartItems.push({
  // //         productname:product.name,
  // //         qty:1,
  // //         price:product.price
  // //       })

  // //     }else{

  // //     for ( let i in this.cartItems){
  // //       if(this.cartItems[i].productid === product.id){
  // //         this.cartItems[i].qty++
  // //       }else{ 
  // //     this.cartItems.push({
  // //       productname:product.name,
  // //       qty:1,
  // //       price:product.price
  // //     })
  // //   }
  // // }

  //     this.cartotal=0
  
  //   this.cartItems.forEach(item=>{
  //     this.cartotal +=(item.qty * item.price)
     
  //   })

  //   this.cartToCalculate();
  // }
 cartToCalculate(){
  this.cartotal=0
  
  this.cartItems.forEach(item=>{
    this.cartotal +=(item.qty * item.price)
 })
 }
}


