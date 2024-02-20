import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cartItems:any[]=[]
  count:any
 item:any
  products:any[] = [];
  title: any;
  
  @Input() pro:any[] = []
  constructor(){

fetch('https://fakestoreapi.com/products').then((res)=>{
  
return res.json()

  }).then((data)=>{
    this.products = data
  })

  }

  add(){
    this.item = JSON.stringify(this.products)
    this.cartItems.push(this.item)
    console.log(this.cartItems)
    this.count = this.cartItems.length
console.log(this.count)
  }


}

