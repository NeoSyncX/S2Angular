import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { DemandeRv } from './features/demande-rv/demande-rv';
import { Rv } from './features/rv/rv';

export const routes: Routes = [
    {path : 'dashboard' , component : Dashboard},
    {path : 'rv' , component : Rv},
    {path : 'demande-rv' , component : DemandeRv},
    {path : '' , redirectTo : 'dashboard' , pathMatch : 'full'}
    
];
