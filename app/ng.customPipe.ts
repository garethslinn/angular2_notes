import {Component} from 'angular2/core';
import {SummaryPipe} from "./summary.pipe";

@Component({
    selector: 'customPipe-example',
    template: `
        {{ post.title }}
        <br />
        {{ post.body | summary }}
        <br />
        {{ post.body.elvisOperator?.name }}
     
     
    `,
    pipes: [SummaryPipe]
})

export class CustomPipeExample {
    post = {
        title: "This is a title",
        body: `
orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
        `,
        elvisOperator: null
    }
}