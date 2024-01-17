import { Component,Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newpage.component.html',
  styleUrl: './newpage.component.css'
})
export class NewpageComponent
{
  @Input() public Name : any;
  @Input() public Mail : any;
  @Input() public Date : string = "";
  @Input() public Impact : string = "";
  @Input() public Details : string = "";

}
