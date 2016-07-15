import {Component} from 'angular2/core';
import {VoterComponent} from './voter.component';
import {LowerUpperPipeExample} from "./ng.LowerCasePipe.component";
import {CurrencyPipeExample} from "./ng.currencyPipe.component";


@Component({
    selector: 'my-app',
    template: `
       <div *ngIf="courses.length >= 1">Courses
        <ul>
            <li *ngFor="#course of courses">
             {{ course }}
            </li>
        </ul>
       </div>
        <voter 
            [voteCount]="post.voteCount"
            [myVote]="post.myVote">        
        </voter>
        
        <ul class="nav nav-pills">
            <li><a (click)="viewMode = 'map'">Map View</a></li>
            <li><a (click)="viewMode = 'list'">List View</a></li>
        </ul>
        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'">Map View Container</template>
            <template [ngSwitchWhen]="'list'">List View Container</template>
        </div>
        <lowerupper-example></lowerupper-example>
        <currency-example></currency-example>
        
`,
    directives: [VoterComponent, LowerUpperPipeExample, CurrencyPipeExample]
})

export class AppComponent {
    post = {
        voteCount: 10,
        myVote: 0
    };
    courses = ['course1', 'course2'];
    viewMode = 'map'
}