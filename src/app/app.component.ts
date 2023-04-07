import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceComponent } from './service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public app: ServiceComponent) {
    
  }

  itemId: number = 1;
  listItem = new FormControl("");

  list: any = [{
    id: this.itemId,
    name: "name1",
    icon: 'X'
  }];

  id: number = 0;
  name: string = "name1";

  check = [{
    delete: true
  }]

  ngOnInit() {
    this.app.getApp();
  }

  changeData() {
    this.id = 1;
    this.name = "name2"
  }

  emitedData(event: any) {
    console.log(event, 'event')
  }
  title: string = 'intro';
  cvladi: number = 12;

  setMain(): void {
    this.cvladi = 14;
  }

  onEnter(event: KeyboardEvent) {
    if (event && event.charCode === 13) {
      this.addItem();
    }
  }

  addItem() {

    const item = this.list.find((item: any) => item.name.trim() == this.listItem.value?.trim());

   if (!item || item === undefined) {
   this.itemId++; 
  //  this.list = this.list.sort((a: any, b: any) => a.id < b.id ? 1 : -1);
  //  console.log(this.list);
    this.list.push({
      id: this.itemId,
      name: this.listItem.value,
      icon: 'X'
    });
  }
  }

  deletingId(id: number) {
    //მასივიდან ელემენტების ამოშლა filter ის დახმარებით
    // this.list = this.list.filter((item: any) => item.id !== id);
    // console.log(this.list)


   //მასივიდან ელემენტების ამოშლა findIndex ის დახმარებით
    this.list.splice(this.list.findIndex((item: any) => item.id == id), 1);
  
    console.log(this.list.length)
  if (this.list.length < 1) {
    this.itemId = 0;
  }
  }


}
