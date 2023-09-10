import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  getData(getData: any) {
    throw new Error('Method not implemented.');
  }

  data:any;
  public form: FormGroup;
  @ViewChild('ProductIdElem') ProductIdElem!: ElementRef;
  
  constructor(private fb: FormBuilder,private http:HttpClient,private share:DataShareService) { 
    this.form = this.fb.group({
      rating: [4],
    });
  }

  ngOnInit(): void {
    this.data = this.share.GetProductData();
  }

  OrderProduct() {
    const myheader = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    // Create an object to hold the data
    const requestBody = {
      orderId: this.ProductIdElem.nativeElement.innerHTML,
      customerId: this.ProductIdElem.nativeElement.innerHTML,
      productId: this.ProductIdElem.nativeElement.innerHTML,
      quantity: 0
    };
  
    // Convert the object to a JSON string
    const requestJSON = JSON.stringify(requestBody);
  
    this.http.post("https://uiexercise.onemindindia.com/api/OrderProducts", requestJSON, { headers: myheader })
      .subscribe(data => {
        console.log(data);
        alert("Thank You! Your Order is Placed");
      });
  }

}
