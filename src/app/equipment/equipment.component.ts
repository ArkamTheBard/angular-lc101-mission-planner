import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  itemBeingEdited = null;
  
  equipment : string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];

  
  add(equip : string){
    if(!this.equipment.includes(equip)){
      this.equipment.push(equip);
    }
  }
  
  remove(item : string){
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index,1);
  }

  edit(item : string){
    this.itemBeingEdited = item;
  }

  save(updateItem : string, originalItem : string){
    let index = this.equipment.indexOf(originalItem);
    this.equipment[index] = updateItem;
    this.itemBeingEdited = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
