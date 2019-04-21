import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
// Import NgMasonryGridModule
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AuthGuard } from './_guards/auth.guard';
import { PainelLateralComponent } from './components/painel-lateral/painel-lateral.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { PostagemListaComponent } from './pages/postagem-lista/postagem-lista.component';
import { PostagemAprovarComponent } from './pages/postagem-aprovar/postagem-aprovar.component';
import { DetalhesPostagemComponent } from './pages/detalhes-postagem/detalhes-postagem.component';
import { CadastrarColaboradorComponent } from './pages/cadastrar-colaborador/cadastrar-colaborador.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PainelLateralComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    LoginComponent,
    CadastroComponent,
    PostagemComponent,
    PostagemListaComponent,
    PostagemAprovarComponent,
    DetalhesPostagemComponent,
    CadastrarColaboradorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgMasonryGridModule,
    MatProgressBarModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
