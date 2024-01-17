import { Routes } from '@angular/router';

import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { NewpageComponent } from './newpage/newpage.component';

export const routes: Routes = [
    {path : '', component : TechnologiesComponent},
    {path : 'books', component : BooksComponent},
    {path : '**', component : NewpageComponent}
];
