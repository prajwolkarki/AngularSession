import { Component, Input,Output, booleanAttribute, numberAttribute ,EventEmitter} from '@angular/core';
import { User } from './../../user';
function newStr(value:string){
  return 'Namastey '+value;
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input({transform:newStr}) name: string= '';
  // @Input({alias:"userAge",transform:numberAttribute}) age!:Number;
  @Input({transform:numberAttribute}) age!:Number;
  @Input({transform:booleanAttribute}) isMarried!: boolean;

  //@Output() myEvent = new EventEmitter<string>();
  @Output() myEvent = new EventEmitter<User>();

  sendData(){
    this.myEvent.emit({name:'prajwol',age:20,isMarried:true});
  }

}
