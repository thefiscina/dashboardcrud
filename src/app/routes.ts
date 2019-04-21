import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { PrincipalComponent } from './pages/principal/principal.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { PostagemAprovarComponent } from './pages/postagem-aprovar/postagem-aprovar.component';
import { PostagemListaComponent } from './pages/postagem-lista/postagem-lista.component';
import { CadastrarColaboradorComponent } from './pages/cadastrar-colaborador/cadastrar-colaborador.component';

export const appRoutes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: 'principal', component: PrincipalComponent },
            { path: 'cadastro-postagem', component: PostagemComponent },
            { path: 'aprovar-postagem', component: PostagemAprovarComponent },
            { path: 'lista-postagem', component: PostagemListaComponent },
            { path: 'cadastrar-colaborador', component: CadastrarColaboradorComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '**', redirectTo: '' }
];