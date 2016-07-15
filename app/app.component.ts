import {Component} from 'angular2/core';
import {VoterComponent} from './voter.component';
import {LowerUpperPipeExample} from "./ng.LowerCasePipe.component";
import {CurrencyPipeExample} from "./ng.currencyPipe.component";
import {NgForExample} from "./ng.ngFor.component";
import {CustomPipeExample} from "./ng.customPipe";
import {NgStyleExample} from "./ng.ngStyle";
import {BootstrapPanel} from "./bootstrap.panel.component";
import {ZippyComponent} from "./zippy.component";



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
            <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
            <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
        </ul>
        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'">Map View Container</template>
            <template [ngSwitchWhen]="'list'">List View Container</template>
        </div>
        <lowerupper-example></lowerupper-example>
        <currency-example></currency-example>
        <ngFor-example></ngFor-example>
        <customPipe-example></customPipe-example>
        <ngStyle-example></ngStyle-example>
        <bs-panel>
            <div class="heading">The heading</div>
            <div class="body">This is a body</div>
        </bs-panel>
        <zippy title="Who can see my stuff?">
            Content of who can see my stuff
        </zippy>
        <zippy title="Who can contact me?">
            Content of who can contact me
        </zippy>
        
`,
    directives: [VoterComponent, LowerUpperPipeExample, CurrencyPipeExample, NgForExample, CustomPipeExample, NgStyleExample, BootstrapPanel, ZippyComponent   ]

})

export class AppComponent {
    post = {
        voteCount: 10,
        myVote: 0
    };
    courses = ['course1', 'course2'];
    viewMode = 'map'
}