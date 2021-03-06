System.register(['angular2/core', './signup-form.component'], function(exports_1, context_1) {
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
    var core_1, signup_form_component_1;
    var FormsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            }],
        execute: function() {
            FormsComponent = (function () {
                function FormsComponent() {
                }
                FormsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [signup_form_component_1.SignupFormComponent],
                        template: "<signup-form></signup-form>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormsComponent);
                return FormsComponent;
            }());
            exports_1("FormsComponent", FormsComponent);
        }
    }
});
//# sourceMappingURL=forms.component.js.map