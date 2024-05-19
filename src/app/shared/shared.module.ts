import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FilmesAssistidosComponent } from './components/filmes-assistidos/filmes-assistidos.component';
import { ContinueAssistindoComponent } from './components/continue-assistindo/continue-assistindo.component';
import { DestaquesComponent } from './components/destaques/destaques.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    MenuComponent,
    CarrouselComponent,
    FilmesAssistidosComponent,
    ContinueAssistindoComponent,
    DestaquesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    MenuComponent,
    CarrouselComponent,
    FilmesAssistidosComponent,
    DestaquesComponent,
    FooterComponent
  ]
})
export class SharedModule { }
