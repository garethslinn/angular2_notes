System.register(['angular2/core', './voter.component', "./ng.LowerCasePipe.component", "./ng.currencyPipe.component"], function(exports_1, context_1) {
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
    var core_1, voter_component_1, ng_LowerCasePipe_component_1, ng_currencyPipe_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (ng_LowerCasePipe_component_1_1) {
                ng_LowerCasePipe_component_1 = ng_LowerCasePipe_component_1_1;
            },
            function (ng_currencyPipe_component_1_1) {
                ng_currencyPipe_component_1 = ng_currencyPipe_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        voteCount: 10,
                        myVote: 0
                    };
                    this.courses = ['course1', 'course2'];
                    this.viewMode = 'map';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n       <div *ngIf=\"courses.length >= 1\">Courses\n        <ul>\n            <li *ngFor=\"#course of courses\">\n             {{ course }}\n            </li>\n        </ul>\n       </div>\n        <voter \n            [voteCount]=\"post.voteCount\"\n            [myVote]=\"post.myVote\">        \n        </voter>\n        \n        <ul class=\"nav nav-pills\">\n            <li><a (click)=\"viewMode = 'map'\">Map View</a></li>\n            <li><a (click)=\"viewMode = 'list'\">List View</a></li>\n        </ul>\n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\">Map View Container</template>\n            <template [ngSwitchWhen]=\"'list'\">List View Container</template>\n        </div>\n        <lowerupper-example></lowerupper-example>\n        <currency-example></currency-example>\n        \n",
                        directives: [voter_component_1.VoterComponent, ng_LowerCasePipe_component_1.LowerUpperPipeExample, ng_currencyPipe_component_1.CurrencyPipeExample]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map