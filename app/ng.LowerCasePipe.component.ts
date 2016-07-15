import {Component} from 'angular2/core';

@Component({
    selector: 'lowerupper-example',
    template: `<div>
    <label>Name: </label>
    <input #name (keyup)="change(name.value)" type="text">
    <p>In lowercase: {{value | lowercase}}</p>
    <p>In uppercase: {{value | uppercase}}</p>
  </div>`
})

export class LowerUpperPipeExample {
    value: string;
    change(value: string) { this.value = value; }
}
