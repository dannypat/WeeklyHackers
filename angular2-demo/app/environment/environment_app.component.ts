import {Component, View} from "angular2/core";

@Component({
   selector: 'app'
})

@View({
  template: '<h2>My First Angular 2 App</h2><p>val: {{val}}</p>'
})

export class AppComponent {
	val: 'This is a p element'
}