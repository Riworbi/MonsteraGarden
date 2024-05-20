import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpeciesComponent } from './species/species.component';

export const routes: Routes = [
    { path : 'about-us' , component: AboutUsComponent}
    ,{ path : 'species' , component: SpeciesComponent}
    ,{ path : 'guide' , component: AboutUsComponent}

];
