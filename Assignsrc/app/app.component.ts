import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

import { BugInfoComponent } from './bug-info/bug-info.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { NewpageComponent } from './newpage/newpage.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,CommonModule,BooksComponent, TechnologiesComponent,RouterOutlet,BugInfoComponent,FooterComponent,HeaderComponent,PersonalInfoComponent,NewpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  public Status : boolean = false;
  
  public Name : string = "";
  public Mail : string = "";
  public Date : string = "";
  public Impact : string = "";
  public Details : string = "";
  
}
