import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  @ViewChild('txt') txt!: ElementRef;
color: string = "black";
  getColor(color: string) {
    this.txt.nativeElement.style.color = "red";
    // this.color = color;
  }
}
