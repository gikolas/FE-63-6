import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { isFormArray } from "@angular/forms";
@Injectable({
    providedIn: 'root'
})
export class ServiceComponent {
    constructor(public app: HttpClient) {

    }
    getApp() {
        return this.app.get("https://angular-http-7477a.firebaseio.com/applications.json")
        .subscribe((data: any) => {
            Object.values(data).forEach((item: any) => {
                console.log(item[0].amount)
            })
          
        })
    }
}