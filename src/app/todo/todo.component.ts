import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() data: any = [];

  @Output() emitDeletingItem: EventEmitter<number> = new EventEmitter();

  deleteItem(id: number) {
    this.emitDeletingItem.emit(id);
  }

}
