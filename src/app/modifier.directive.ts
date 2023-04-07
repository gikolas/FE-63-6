import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appModifier]'
})
export class ModifierDirective {

  constructor(public element: ElementRef) {
    this.element.nativeElement.style.color = this.color
   }

   //HostBinding აღიწერება css ის სტილები
   @HostBinding('style.color') color = "red";
   @HostBinding('style.display') display = "block";

   //HostListener უსმენს ამ ელემენტის ყველა ივენთს
   @HostListener('click') onClick() {
    this.checkStorageData();
    this.color = this.color === "yellow" ? "red" : "yellow"
   }

   //? safe ოპერატორი რომელიც თავიდინაც იცილებს, ობიექტის არარსებულ ფრეგერთის
   checkStorageData() {
    let data: any  = localStorage.getItem("data");
    if ( JSON.parse(data)?.test?.name === "1234") {
      this.display = "none";
    }
   }

}
