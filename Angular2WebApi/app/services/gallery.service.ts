import { Injectable } from '@angular/core';
import { Headers, Response, Http  } from '@angular/http';
import { Person } from '../hero';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GalleryService {

    private heroesUrl = 'http://localhost:50464/api/values';
    // private heroesUrl = 'app/heroes';
    private baseUrl: string = 'http://swapi.co/api';
    constructor(private http: Http) { }

    getValues(): Observable<Hero[]> {
        let people$ = this.http
            .get(this.heroesUrl, { headers: this.getHeaders2() })
            .map(mapValue)
            .catch(handleError);
        return people$;
    }

    getHeroes(): Observable<Person[]> {
        let people$ = this.http
            .get(`${this.baseUrl}/people`, { headers: this.getHeaders() })
            .map(mapPersons)
            .catch(handleError);
        return people$;
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
    private getHeaders2() {
        let headers = new Headers();
        headers.append('Accept', 'application/json;charset=UTF-8');
        headers.append('Authorization', 'Bearer ' + localStorage['tok']);
        return headers;
    }
}
function mapPersons(response: Response): Person[] {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');

    // The response of the API has a results
    // property with the actual results
    return response.json().results.map(toPerson)
}

function toPerson(r: any): Person {
    let person = <Person>({
        id: extractId(r),
        url: r.url,
        name: r.name,
        weight: r.mass,
        height: r.height,
    });
    console.log('Parsed person:', person);
    return person;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData: any) {
    let extractedId = personData.url.replace('http://swapi.co/api/people/', '').replace('/', '');
    return parseInt(extractedId);
}


function mapPerson(response: Response): Person {
    // toPerson looks just like in the previous example
    return toPerson(response.json());
}

function mapValues(response: Response): Hero[] {
    // uncomment to simulate error:
    // throw new Error('ups! Force choke!');

    // The response of the API has a results
    // property with the actual results
    return response.json()//.results.map(toVal)
}

function mapValue(response: Response): Hero {
    // toPerson looks just like in the previous example
    console.log('Parsed val:', response.json());
    return response.json();
}

function toVal(r: any): Hero {
    let val = <Hero>({
        id: r,
        name: r.name,
    });
    console.log('Parsed val:', val);
    return val;
}

// this could also be a private method of the component class
function handleError(error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
    console.error(errorMsg);

    // throw an application level error
    return Observable.throw(errorMsg);
}


export interface Hero {
    id: number;
    name: string;
}
