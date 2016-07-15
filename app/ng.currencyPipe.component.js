System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var CurrencyPipeExample;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CurrencyPipeExample = (function () {
                function CurrencyPipeExample() {
                    this.a = 0.259;
                    this.b = 1.3495;
                }
                CurrencyPipeExample = __decorate([
                    core_1.Component({
                        selector: 'currency-example',
                        template: "<div>\n    <p>A: {{a | currency:'GBP':false}}</p>\n    <p>B: {{b | currency:'GBP':true:'4.2-2'}}</p>\n  </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CurrencyPipeExample);
                return CurrencyPipeExample;
            }());
            exports_1("CurrencyPipeExample", CurrencyPipeExample);
        }
    }
});
//# sourceMappingURL=ng.currencyPipe.component.js.map