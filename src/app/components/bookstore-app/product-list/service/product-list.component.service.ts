import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()

export class BookService {

    private url = 'https://sheet.best/api/sheets/969c882a-2cce-4288-bffb-8d5c6d52ab8f';

    // URL para conectar em API caso limite de Requests seja atingido
    // https://sheet.best/api/sheets/efcdb0bc-4bcb-4f05-ab91-6f0e4845d234
    // https://sheet.best/api/sheets/91a681be-eaed-4e37-a3d9-d23fd9f4d3c4 
    // https://sheet.best/api/sheets/969c882a-2cce-4288-bffb-8d5c6d52ab8f *(atual)

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private http: HttpClient) { }

    getBook() {
        return this.http.get(this.url)
    }

}