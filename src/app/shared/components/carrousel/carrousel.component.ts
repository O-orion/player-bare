import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {
  slides = [
    {img: "https://image.tmdb.org/t/p/original/xncPDbNFr9YnZqaB6Ht9uItaoZO.jpg"},
    {img: "https://image.tmdb.org/t/p/original/jaluQ5yKM2Z9L1ABIXKBTr4MXo8.jpg"},
    {img: "https://image.tmdb.org/t/p/original/M41BokHuilWjVj0Msck6RLbvVG.jpg"},
    {img: "https://image.tmdb.org/t/p/original/fWSGD2yrzz6hscocnMD8AEXIThk.jpg"},
    {img: "https://image.tmdb.org/t/p/original/6o8ljn7y5ChNir6dNqYSyGuNcs1.jpg"},
    {img: "https://image.tmdb.org/t/p/original/xncPDbNFr9YnZqaB6Ht9uItaoZO.jpg"}
  ];

  slideConfig = {
    "slidesToShow":4,
    "slidesToScroll":4,
    "autoplay": false,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "infinite": true,
    "dots":true,
    "responsive": [
     {
      "breakpoint":992,
      "settings": {
       "arrows": true,
       "infinite":true,
       "slidesToShow":3,
       "slidesToScroll":3,
       fade: true,
       cssEase: 'linear'
      }
     },
     {
      "breakpoint":768,
      "settings": {
       "arrows": true,
       "infinite":true,
       "slidesToShow":1,
       "slidesToScroll":1,
       fade: true,
       cssEase: 'linear'
      }
     }
    ]
  }
}
