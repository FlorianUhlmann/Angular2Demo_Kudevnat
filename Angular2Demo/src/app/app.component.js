"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageHeader = "TrySite of Angular Tutorial by Kudvenat";
        this.imagePath = 'https://www.sciencealert.com/images/2018-04/processed/019-dna-i-motif-structure-living-cells-0_1024.jpg';
        this.isDisabled = false;
        this.badHtml = 'Hello <sript> alert("hakced");</script> World ';
        this.firstName = 'Tutorial by ';
        this.lastName = 'Kudvenat';
        this.colmSpan = 2;
        this.classesToApply = 'italicClass boldClass';
        this.appylBoldClass = true;
        this.applyItalicClass = false;
        this.name2way = "[] is porperty () is event Binding";
        //LifecycleHool
        this.userText = 'Pragim';
        this.isBold = true;
        this.fontSize = 50;
        this.isItalic = true;
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    ;
    AppComponent.prototype.onClick = function () {
        console.log('Button clicked');
    };
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.appylBoldClass,
            italicsClass: this.applyItalicClass
        };
        return classes;
    };
    AppComponent.prototype.addStyles = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal',
        };
        return styles;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div> \n                    <body style=\"background: url(https://images.vogel.de/vogelonline/bdb/1245400/1245458/4.jpg) ; background-size: 100% 100% \">\n                        <h1 font-size=\"xx-large\">{{pageHeader ? getFullName() : 'NoHeader'}}</h1>\n                        <my-employee></my-employee>    \n                        <img src='{{imagePath}}'/>\n                        <br/><br/>\n                        <button on-click='onClick()'>Click me baby</button>\n                        <br/><br/>\n                        Name : <input [(ngModel)]='name2way'/>       \n                        <br/>\n                        You enterd : {{name2way}}\n                        <br/>\n                        <div style=\"background-color: white\">\n                            <list-employee></list-employee>\n                        </div> \n                        <div style=\"background-color: green\">\n                                <h2 font-size=\"x-large\">LifecycleHook</h2>\n                                Your Text : <input type='text' [(ngModel)]='userText'/>\n                                <br/>   <br/> \n                                <simple [simpleInput]='userText'></simple>\n                        </div>\n                    </body>\n               </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map