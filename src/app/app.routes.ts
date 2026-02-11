import { Routes } from '@angular/router';
import { Dashboard } from './features/private/dashboard/dashboard';
import { DemandeRv } from './features/private/demande-rv/demande-rv';
import { FormDemande } from './features/private/demande-rv/form-demande/form-demande';
import { ListDemande } from './features/private/demande-rv/list-demande/list-demande';
import { Rv } from './features/private/rv/rv';
import { Header } from './layouts/private/header/header';
import { Public } from './features/public/public';
import { Private } from './features/private/private';
import { HeaderPublic } from './layouts/public/header-public/header-public';
import { Login } from './features/public/login/login';
import { Patient } from './features/public/patient/patient';

export const routes: Routes = [
    // public routes
    {
        path : 'public',
        component : Public,
        children : [
            {path : 'login' , component : Login},
            {path : 'patient' , component : Patient},
            {path : '' , redirectTo : 'login' , pathMatch : 'full'}
        ]
    },
    
    // private routes
    {
        path : 'private',
        component : Private,
        children : [
            {path : 'dashboard' , component : Dashboard},
            {path : 'rv' , component : Rv},
            {path : 'demande-rv' , component : DemandeRv},
            {path : 'demande-rv/form' , component : FormDemande},
            {path : 'demande-rv/list' , component : ListDemande},
            {path : '' , redirectTo : 'dashboard' , pathMatch : 'full'}
        ]
    },
    {path : '' , redirectTo : 'public' , pathMatch : 'full'},
    {path : '**' , redirectTo : 'public/login' , pathMatch : 'full'}
];
