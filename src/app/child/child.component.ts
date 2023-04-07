import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  //Input მშბოლიდან შვილზე ინფორმაციის გადაწოდება
  @Input() x: string | number | undefined;
  @Input() id: number | undefined;
  @Input() name: string | undefined;


  //Output შვილიდან მშობელზე ინფორმაციის დაბრუნება
  @Output() nameConcatenattion: EventEmitter<any> = new EventEmitter();

  getData() {
    this.nameConcatenattion.emit("123");
    // return this.name + "123";
  }
}
