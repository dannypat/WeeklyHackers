import {Component} from "angular2/core";
import {ItemComponent} from './item-list.component';

@Component({
    selector: 'metadata',
    template: `<my-list></my-list>`,
    directives:[ItemComponent]
})
export class MyTemplate {}