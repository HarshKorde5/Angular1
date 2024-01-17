import { Component, Input, Output,EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent
{
  @Input() public StatusP : boolean = false;
  
  @Output() public Laserlight1 = new EventEmitter();

  public Name : string = "";
  public Mail : string = "";

  public pinit(value1 : string,value2 : string)
  {
    this.Name = value1;
    this.Mail = value2;

    this.sendp();

  }

  public sendp()
  {
    this.Laserlight1.emit(this.Name);
    this.Laserlight1.emit(this.Mail);

    
  }
}
