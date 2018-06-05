import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<div> 
                    <body style="background: url(https://images.vogel.de/vogelonline/bdb/1245400/1245458/4.jpg) ; background-size: 100% 100% ">
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
                        <div style="background-color: white">
                            <list-employee></list-employee>
                        </div> 
                        <div style="background-color: green">
                                <h2 font-size="x-large">LifecycleHook</h2>
                                Your Text : <input type='text' [(ngModel)]='userText'/>
                                <br/>   <br/> 
                                <simple [simpleInput]='userText'></simple>
                        </div>
                    </body>
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
    //LifecycleHool
    userText: string = 'Pragim';
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