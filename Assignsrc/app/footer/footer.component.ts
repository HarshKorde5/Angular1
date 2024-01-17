import { Component, EventEmitter, Output } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers : [Router]
})
export class FooterComponent
{
  @Output() public Laserlight = new EventEmitter();

  constructor(private router: Router) { }

  public  SendM()
  {
    this.Laserlight.emit(true);
    this.router.navigate(['/newpage']);
  }
}
