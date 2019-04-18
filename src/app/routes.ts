import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { PrincipalComponent } from './pages/principal/principal.component';

export const appRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: 'principal', component: PrincipalComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];