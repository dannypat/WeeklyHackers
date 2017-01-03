import {Component} from 'angular2/core';

@Component({
    selector: 'databinding',
    template: `
           <ul>
              <li
              *ngFor="#Item of Items"
              (click)="onItemClicked(Item)">
                  {{ Item.name }}
              </li>
           </ul>
           <input type="text" [(ngModel)]="clickedItem.name">
   `
})
export class AppComponent {
     public Items = [
                     {name: "Butter"},
                     {name: "Milk"},
                     {name: "Yogurt"},
                     {name: "Cheese"},
                  ];
     public clickedItem = {name: ""};
     onItemClicked(Item) {
        this.clickedItem = Item;
     }
}