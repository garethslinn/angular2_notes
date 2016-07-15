import {Component} from 'angular2/core';

@Component({
    selector: 'ngStyle-example',
    template: `
        <button
            [ngStyle]="{
                backgroundColor: canSave ? 'blue' : 'gray',
                color: canSave ? 'white' : 'black',
                fontWeight: canSave ? 'bold' : 'normal'                
            }"            
        >Submit</button>
  `
})

export class NgStyleExample {
    canSave = true
}
