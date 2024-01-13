import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ButtonsModule,AlertModule,BsDropdownModule,CollapseModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[provideAnimations()]
})
export class AppComponent {
  title = 'BootStrapDemo';
  isCollapsed = false;

}
