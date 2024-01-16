import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  standalone: true,
  imports: [],
  templateUrl: './demo-component.component.html',
  styleUrl: './demo-component.component.css'
})
export class DemoComponentComponent 
{
  public Technology = "Angular";

  public Display()
  {
    return "Marvellous Infosystems";
  }
}
