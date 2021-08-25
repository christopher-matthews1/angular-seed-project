import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    user = {id:1, name: 'Kevin', gender: 'M', ageGroup: '51+', userCode: 'M51+', reqs:{}, reqsStatus: {fruitMet: false, vegMet: false, proteinMet: false, grainMet: false}, registered: true
    , email: 'kevin@kevinruse.com'};

    loggedIn: boolean = false;
    stylePreference: string;

    setImportance() {
        if (this.stylePreference === 'hilite') {
            return {'background-color' : 'yellow'}
        } else if (this.stylePreference === 'caps') {
            return {'text-transform' : 'uppercase'}
        }
    }

    setStylePreference(value: string) {
        this.stylePreference = value;
    }

    logIn(evt) {
        console.log(evt);
        this.loggedIn = evt;
    }
}