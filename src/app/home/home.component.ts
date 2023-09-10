import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from "@angular/router";
import { DataShareService } from '../data-share.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errorMessage: any;
  // getData(getData: any) {
  //   throw new Error('Method not implemented.');
  // }
  productList:any;
  
  constructor(private http:HttpClient,private router: Router, private share:DataShareService) { }

  getProducts(){
    let url = "https://uiexercise.onemindindia.com/api/Product"
    this.http.get(url).subscribe(products => {
      this.productList = products;
      console.log(products);
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  goToOrder(product: any){
    console.log(product);
    this.share.SetProduct(product)
    this.router.navigate(['/order']);
  }

}
