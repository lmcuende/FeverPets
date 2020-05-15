import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent }    from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetDetailComponent } from './components/pet-detail/pet-detail.component';
import { PetDayComponent } from './components/pet-day/pet-day.component';






const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'pets', component: PetsComponent},
    {path: 'pet-detail', component: PetDetailComponent},
    {path: 'pet-of-the-day', component: PetDayComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);