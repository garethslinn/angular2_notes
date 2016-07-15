import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'twitter',
    template: `
        <div class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="http://lorempixel.com/100/100/people?1" alt="...">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Media heading</h4>
            ...
          </div>
        </div>
`,
    styles: ``
})

export class TwitterComponent {

}