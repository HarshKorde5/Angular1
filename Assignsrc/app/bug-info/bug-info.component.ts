import { Component,EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bug-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bug-info.component.html',
  styleUrl: './bug-info.component.css'
})
export class BugInfoComponent
{
  @Input() public StatusB : boolean = false;
  @Output() public Laserlight2 = new EventEmitter();

  
  public Date : string = "";
  public Impact : string = "";
  public Details : string = "";


  public binit(value1 : string,value2 : string,value3 : string)
  {
    this.Date = value1;
    this.Impact = value2;
    this.Details = value3;

    this.Laserlight2.emit(this.Date);
    this.Laserlight2.emit(this.Impact);
    this.Laserlight2.emit(this.Details);

  }
}
