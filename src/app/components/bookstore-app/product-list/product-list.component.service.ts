import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable()

export class BookService {

    private url = 'https://sheet.best/api/sheets/efcdb0bc-4bcb-4f05-ab91-6f0e4845d234';

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private http: HttpClient) { }

    getBook() {
        return this.http.get(this.url)
    }

}