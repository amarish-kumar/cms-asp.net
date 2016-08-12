import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
    private loggedIn = false;

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(email, password) {
        let body = "grant_type=password&username=admin@test.com&password=$Test1234";
        
        return this.http.post('http://localhost:50464/Token', body, { headers: contentHeaders })
            .map(response => {
                response.json().access_token;
                localStorage.setItem('auth_token', response.json().access_token);
                this.loggedIn = true;
                return response.statusText;
            }).catch(this.handleError);       
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}