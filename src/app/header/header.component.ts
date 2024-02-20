import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Input() cartItems!:string
  @Input() count!:string

cartData(_cartItems: any){
console.log(JSON.parse(this.count)) 
console.log(JSON.parse(this.cartItems))
}
}
