import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  userForm:any;

  constructor(public formbuilder:FormBuilder){

  }

  ngOnInIt(){
    this.userForm = this.formbuilder.group(
      {
        name:['',],
        email:['',]
      }
    )
  }

  onSubmit(){
    console.log("Form Submitted", this.userForm.value);
  }

}
