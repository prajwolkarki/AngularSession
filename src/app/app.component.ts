import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,UserProfileComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = [
    { name: "John Doe", age:19, isMarried: true },
    { name: "Jane Smith", age:20, isMarried: false },
    { name: "Alice Johnson", age:23, isMarried:true}
  ]
  birthday = '2003-03-08'
  title = 'learning AnGular 17'
  salary = 10000
  hobby = ['ranting','coding','video games']
  receiveData(e:User){
    console.log(e)
  }
  
}
