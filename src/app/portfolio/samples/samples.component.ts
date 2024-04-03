import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-samples',
  standalone: true,
  imports: [HttpClientModule, ButtonsModule, CommonModule],
  templateUrl: './samples.component.html',
  styleUrl: './samples.component.scss',
})
export class SamplesComponent {
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  fetchPosts() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (response) => {
          console.log('Response:', response);
          this.posts = response;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
