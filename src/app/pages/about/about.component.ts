import { Component } from '@angular/core';
import { AddressComponent } from '../../components/address/address.component';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AddressComponent,RouterModule,RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
