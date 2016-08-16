import { Component } from '@angular/core';
import { contentHeaders } from '../common/headers';
import { Headers, Http } from '@angular/http';

@Component({
    selector: 'manage-entry',
    templateUrl: 'app/components/manage-entry.component.html', 
    styleUrls: ['app/components/manage-entry.component.css']
})
export class ManageEntryComponent {
    
    submitPost = false;
    constructor(public http: Http) {
      
    }

    savePost(event, title, content) {
        event.preventDefault();
        this.submitPost = true;
        let body = { title: title, content: content };
        this.http.post('http://localhost:50464/api/Entry', body, { headers: this.getHeaders2() })
            .subscribe(
            response => {
                //this.router.navigate(['/login']);
                this.submitPost = false;
            },
            error => {
                //alert(error.text());
                console.log(error.text());
                this.submitPost = false;
            },
            () => this.submitPost = false
            );
    }
    private getHeaders2() {
        let headers = new Headers();
        headers.append('Accept', 'application/json;charset=UTF-8');
        headers.append('Authorization', 'Bearer ' + localStorage['auth_token']);
        return headers;
    }
}