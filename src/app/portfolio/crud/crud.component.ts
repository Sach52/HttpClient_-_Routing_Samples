import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { response } from 'express';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  items: any[] = [];

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.getItemDetails();
    this.getItemById(2);
    this.addItem({ id: 4, name: 'Added item' });
    this.updatedItem(3, { id: 4, name: 'Updated Item' });
    this.deleteitem(2);
  }

  getItemDetails() {
    this.userService.getItems().subscribe((response) => {
      console.log('Get all Items :', response.items);
    });
  }

  getItemById(id: number) {
    this.userService.getItemById(id).subscribe((response: any) => {
      console.log('Items by id', id);
      const item = response.items.find((item: any) => item.id === id);
      console.log('Single Item', item);
    });
  }

  addItem(newItem: any) {
    this.userService.addItem(newItem).subscribe((data) => {
      console.log('added item', newItem);
    });
  }

  updatedItem(id: number, updatedItem: any) {
    this.userService.updateItem(id, updatedItem).subscribe((data) => {
      console.log('Updated Item', id);
      console.log('Updated Succesfully!!!!');
    });
  }

  deleteitem(id:number){
    this.userService.deleteItem(id).subscribe(()=>{
      console.log("Item deleted succesfully!!!!");
      
    })
  }
}
