import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { contentHeaders } from '../common/headers';

@Component({
    selector: 'register',
    templateUrl: 'app/components/register.component.html'
})
export class RegisterComponent {
    values = new Hero();
    title = 'hola';

    constructor(public router: Router, public http: Http) {
    }

    register(event, email, password, confirmPassword) {
        event.preventDefault();
        confirmPassword = '$Test1234';
        let body = JSON.stringify({ email, password, confirmPassword });
        this.http.post('http://localhost:50464/api/Account/Register', body, { headers: contentHeaders })
            .subscribe(
            response => {
                localStorage.setItem('tok', response.json().access_token);
                this.router.navigate(['/dashboard']);
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }

}

export class Hero {

    public id: number;
    public name: string;

}