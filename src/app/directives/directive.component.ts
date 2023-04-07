import { Component } from "@angular/core";

@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
    isShow: boolean = false;

    colors: string[] = ["red", "green", "blue"];

    divColors: any = [
        {color: "red", backColor: 'green', text: 'DIV1'},
        {color: "green", backColor: 'red', text: 'DIV2'},
        {color: "black", backColor: 'yellow', text: 'DIV3'}
    ];

    addData() {
        this.divColors.push({
            color: 'brown', backColor:'red', text: 'DIV4'
        })
        this.isShow = !this.isShow;
    }

    addStorage() {
        localStorage.setItem("data", JSON.stringify({
            name: "1234",
            key: 2
        }))
    }
}