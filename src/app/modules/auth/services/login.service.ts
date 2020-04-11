import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class LoginService {

    private readonly urlApi: string;

    constructor(private http: HttpClient) {
        this.urlApi = environment.urlApi;
    }

    login(username: string, password: string) {
        return this.http.post(`${this.urlApi}/login`, {username, password});
    }
}
