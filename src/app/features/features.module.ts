import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class FeaturesModule { }
