import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
    export class Api {
        apiUrl = 'http://localhost:2222';
        private detailSubject;
        detail;
        constructor(private http: HttpClient) {
            const initialSubject = window.localStorage.getItem('cart-component');
            const parsedSubject = JSON.parse(initialSubject);
            this.detailSubject = new BehaviorSubject(parsedSubject);
            this.detail = this.detailSubject.asObservable();
        }

        getItems = () => this.http.get(this.apiUrl);
        getDetail = url => this.http.get(url);

        getFact = () => this.http.get('http://localhost:2222');
    }