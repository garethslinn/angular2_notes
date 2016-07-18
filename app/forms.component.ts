import {Component} from 'angular2/core';
import {ConactFormComponent} from './contact-form.component'

@Component({
    selector: 'my-app',
    directives: [ConactFormComponent],
    template: `<contact-form></contact-form>`
})

export class FormsComponent {

}