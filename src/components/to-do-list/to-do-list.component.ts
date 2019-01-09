import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../models/ToDoItem.model'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']

})
export class ToDoListComponent implements OnInit {

  constructor() { }

  newItem: string = "";
  toDoListList: ToDoItem [] = [
    {itemText:'count sheep', done:false, itemClass:"undoneClass", buttonClass:"buttonClassUndone"},
    {itemText:'recount sheep', done:false, itemClass:"undoneClass", buttonClass:"buttonClassUndone"},
    {itemText:'record sheep count', done:false, itemClass:"undoneClass", buttonClass:"buttonClassUndone"},
    {itemText:'sync sheep database', done:false, itemClass:"undoneClass", buttonClass:"buttonClassUndone"},
    {itemText:'fix sleep schedule', done:false, itemClass:"undoneClass", buttonClass:"buttonClassUndone"},
  ];
  showElement: boolean = true;

  buttonClicked(i : number){
    if(this.toDoListList[i].done==false){
      this.toDoListList[i].done = true;
      this.toDoListList[i].itemClass = "doneClass";
      this.toDoListList[i].buttonClass = "buttonClassDone";
    }
    else{
      this.toDoListList[i].done = false;
      this.toDoListList[i].itemClass = "undoneClass";
      this.toDoListList[i].buttonClass = "buttonClassUndone";
    }
  }

  addButtonClicked(itemTextInput : string){
    this.toDoListList.push({itemText: itemTextInput, done:false, itemClass:"undoneClass", buttonClass:"buttonClassUndone"});
    this.newItem = "";
  }

  ngOnInit() {
    this.showElement=true;
  }
 
  deleteButtonClicked(i : number){
    this.toDoListList.splice(i,1);
  }
}


