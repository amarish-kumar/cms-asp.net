import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { contentHeaders } from '../common/headers';

@Component({
    selector: 'gallery',
    templateUrl: 'app/components/login.component.html'
})
export class LoginComponent {
    values = new Hero();
    title = 'hola';

    constructor(public router: Router, public http: Http) {
    }

    login(event, username, password) {
        event.preventDefault();
        let email = 'admin@test.com';
        password = 'admin@test.com';
        let confirmpassword = 'admin@test.com';
        let body2 = "grant_type=password&username=admin@test.com&password=$Test1234";
        let body = JSON.stringify({ username: email, password: password, grant_type: 'password' });
        this.http.post('http://localhost:50464/Token', body2, { headers: contentHeaders })
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

    signup(event) {
        event.preventDefault();
        this.router.navigate(['/register']);
    }


}

export class Hero {

    public id: number;
    public name: string;

}