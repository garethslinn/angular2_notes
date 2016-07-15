import {Component} from 'angular2/core';

@Component({
    selector: 'ngFor-example',
    template: `
        <ul>
            <li *ngFor="#course of courses, #i = index">
                {{ i + 1 }} - {{ course }}
            </li>
            
        </ul>
    `
})

export class NgForExample {
    courses = ['Course1','Course2','Course3']
}