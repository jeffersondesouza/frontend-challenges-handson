import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable()
export class CapitalsApiService {

    constructor(private http: HttpClient) {

    }
    loadCapitals(): Observable<any[] | {}> {
        return this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
            .pipe(
                map(res => res),
                catchError(error => error)
            );
    }
}
