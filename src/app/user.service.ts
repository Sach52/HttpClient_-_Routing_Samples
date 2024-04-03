import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public getUrl = 'assets/data.json';

  constructor(public http: HttpClient) {}

  //CRUD
  getItems(): Observable<any> {
    return this.http.get(this.getUrl);
  }

  getItemById(id: number) {
    return this.http.get(`${this.getUrl}?id=${id}`);
  }

  addItem(item: any): Observable<any> {
    return this.http.post(this.getUrl, item);
  }

  updateItem(id: number, updatedItem: any): Observable<any> {
    return this.http.put(`${this.getUrl}?id=${id}`, updatedItem);
  }

  deleteItem(id:number):Observable<any>{
    return this.http.delete(`${this.getUrl}?id=${id}`);
  }
}
