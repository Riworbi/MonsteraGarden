import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SpeciesComponent } from './components/species/species.component';
import { HomeComponent } from './components/home/home.component';
import { GuideComponent } from './components/guide/guide.component';

export const routes: Routes = [
    { path : '' , component: HomeComponent},
    { path : 'about-us' , component: AboutUsComponent}
    ,{ path : 'species' , component: SpeciesComponent}
    ,{ path : 'guide' , component: GuideComponent}

];
