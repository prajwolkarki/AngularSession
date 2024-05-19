import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  inputType = 'text';
  inputPassword = ""
  inputEmail = ""
  users = [
    { name: "John Doe", salary: 50000, isMarried: true },
    { name: "Jane Smith", salary: 60000, isMarried: false },
    { name: "Alice Johnson", salary: 70000, isMarried: true }
  ]
  onChange(e:Event){
    // console.log((e.target as HTMLInputElement).value);
    this.inputEmail = (e.target as HTMLInputElement).value;
  }
}
