import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './portfolio/about-us/about-us.component';
import { StudentComponent } from './portfolio/student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutUsComponent,StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sample-Practicse';
}
