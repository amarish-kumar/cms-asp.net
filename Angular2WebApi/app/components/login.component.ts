import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { contentHeaders } from '../common/headers';
import { UserService } from '../services/user.service';

@Component({
    selector: 'gallery',
    templateUrl: 'app/components/login.component.html',
    providers: [
        UserService
    ]
})
export class LoginComponent {
    values = new Hero();
    title = 'hola';

    constructor(public router: Router, public http: Http, private userService: UserService) {
    }
    /* eventually drop this code
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
                let tok = localStorage['tok'];
                this.router.navigate(['/dashboard']);
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }
    */
    login(event, username, password) {
               
        this.userService
            .login(username, password)
            .subscribe((result) => {
            if (result) {
                this.router.navigate(['/']);
            }
        });
        
    }


}

export class Hero {

    public id: number;
    public name: string;

}