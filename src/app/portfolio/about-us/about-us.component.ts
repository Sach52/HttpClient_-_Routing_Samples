import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  onSubmit(form:any){
    console.log("Form submitted",form.value)
  }
}
