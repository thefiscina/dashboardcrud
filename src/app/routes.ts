import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { PrincipalComponent } from './pages/principal/principal.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const appRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: 'principal', component: PrincipalComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '**', redirectTo: '' }
];