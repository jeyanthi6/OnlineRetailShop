import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  productData:any
  constructor() { }

  SetProduct(data: any){
    this.productData = data;
  }

  GetProductData(){
    return this.productData;
  }
}
