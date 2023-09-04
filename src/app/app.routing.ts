import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'anime-details', component: AnimeDetailsComponent },
  // Adicione mais rotas para outras páginas aqui

  // Rota padrão redireciona para a página inicial
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Rota para página não encontrada
  { path: '**', component: PaginaNaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}