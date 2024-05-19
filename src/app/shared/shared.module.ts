import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    MenuComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    MenuComponent,
    CarrouselComponent
  ]
})
export class SharedModule { }
