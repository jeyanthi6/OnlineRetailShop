import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show = false;
  @ViewChild('addProName') addProName!: ElementRef;
  @ViewChild('addProId') addProId!: ElementRef;
  @ViewChild('addProCount') addProCount!: ElementRef;
  http: any;
  errorMessage: any;

  constructor() { }

  ngOnInit(): void {
  }

  openPopup(){
    this.show = true;
  }
  closePopup(){
    this.show = false;
  }
  closeDialog(e:any){
    if(e.target.classList.contains('popup')){
      this.show = false;
    }
  }
  AddProduct() {
    const myheader = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    const requestBody = {
      productName: this.addProName.nativeElement.value,
      productId: this.addProId.nativeElement.value,
      availableQuantity: this.addProCount.nativeElement.value
    };
  
    // Convert the object to a JSON string
    const requestJSON = JSON.stringify(requestBody);
    console.log(requestJSON)
  
    this.http.post("https://uiexercise.onemindindia.com/api/Product", requestJSON, { headers: myheader })
      .subscribe((response: any) => {
        console.log(response);
        alert("New Product is added");
      }, 
      (error: any) =>  {this.errorMessage = <any>error;alert(error)} );
  }

}
