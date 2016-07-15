import {Component} from 'angular2/core';

@Component({
    selector: 'currency-example',
    template: `<div>
    <p>A: {{a | currency:'GBP':false}}</p>
    <p>B: {{b | currency:'GBP':true:'4.2-2'}}</p>
  </div>`
})

export class CurrencyPipeExample {
    a: number = 0.259;
    b: number = 1.3495;
}