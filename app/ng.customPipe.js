System.register(['angular2/core', "./summary.pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, summary_pipe_1;
    var CustomPipeExample;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            CustomPipeExample = (function () {
                function CustomPipeExample() {
                    this.post = {
                        title: "This is a title",
                        body: "\norem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem \n        ",
                        elvisOperator: null
                    };
                }
                CustomPipeExample = __decorate([
                    core_1.Component({
                        selector: 'customPipe-example',
                        template: "\n        {{ post.title }}\n        <br />\n        {{ post.body | summary }}\n        <br />\n        {{ post.body.elvisOperator?.name }}\n     \n     \n    ",
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomPipeExample);
                return CustomPipeExample;
            }());
            exports_1("CustomPipeExample", CustomPipeExample);
        }
    }
});
//# sourceMappingURL=ng.customPipe.js.map