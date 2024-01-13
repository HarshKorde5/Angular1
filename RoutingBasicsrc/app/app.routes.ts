import { Routes } from '@angular/router';

import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';

export const routes: Routes = [
    //Specific Route
    {path : 'batchdetails', component : BatchdetailsComponent},
    {path : 'batchlist', component : BatchlistComponent},
    //Default Route
    {path : '', component : HomepageComponent},
    //Wildcard Route/Invalid Route
    {path : '**', component : InvalidPageComponent},
];
