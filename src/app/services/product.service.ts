import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {productUrl} from 'src/app/config/api'
const apiUrl=productUrl;


@Injectable({
  providedIn: 'root'
})


export class ProductService {

  // products: Product[]=
  // [
  //   new Product(1,'product1',"this is lovely",25),
  //   new Product(2,'product2',"this is lovely",225),
  //   new Product(3,'product3',"this is lovely",250),
  //   new Product(4,'product4',"this is lovely",125),
  //   new Product(5,'product5',"this is lovely",265),
  //   new Product(6,'product5',"this is lovely",265),
  //   new Product(7,'product5',"this is lovely",265)

  // ]

  constructor(private http : HttpClient) { }
  getProducts():Observable <Product[]>{
      return  this.http.get <Product[]>(apiUrl);
  }

}
