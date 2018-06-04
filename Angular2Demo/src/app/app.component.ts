import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<div>
                       <h1 font-size="xx-large">{{pageHeader ? getFullName() : 'NoHeader'}}</h1>
                        <my-employee></my-employee>    
                        <img src='{{imagePath}}'/>
                        <br/><br/>
                        <button on-click='onClick()'>Click me baby</button>
                        <br/><br/>
                        Name : <input [(ngModel)]='name2way'/>       
                        <br/>
                        You enterd : {{name2way}}
                        <br/>
<list-employee></list-employee>
               </div>`
})
export class AppComponent {
    
    pageHeader: string = "TrySite of Angular Tutorial by Kudvenat";
    imagePath: string = 'https://www.sciencealert.com/images/2018-04/processed/019-dna-i-motif-structure-living-cells-0_1024.jpg';
    isDisabled: boolean = false;
    badHtml: string = 'Hello <sript> alert("hakced");</script> World ' ;
    firstName: string = 'Tutorial by ';
    lastName: string = 'Kudvenat';
    colmSpan: number = 2;
    classesToApply: string = 'italicClass boldClass';
    appylBoldClass: boolean = true;
    applyItalicClass: boolean = false;
    name2way: string = "[] is porperty () is event Binding";

    isBold: boolean = true;
    fontSize: number = 50;
    isItalic: boolean = true;



    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    };

    onClick(): void {
        console.log('Button clicked');
    }

    addClasses() {
        let classes = {
            boldClass: this.appylBoldClass,
            italicsClass: this.applyItalicClass
        };
        return classes;
    }

    addStyles() {
        let styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal',
        };
        return styles;
    }

}