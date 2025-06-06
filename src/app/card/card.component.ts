import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
public image:any;

constructor(){

}
ngOnInit(): void {
  this.image='https://picsum.photos/336/254'
}
}
