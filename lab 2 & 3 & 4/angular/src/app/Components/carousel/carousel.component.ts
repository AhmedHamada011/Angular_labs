import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  imgSrc=[
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg'
  ];
  current = 0;
  imageInterval:any = "";


  next(){
    if(this.current < this.imgSrc.length-1)
      this.current++;
  }
  prev(){
    if(this.current > 0)
      this.current--;

  }
  slide(){
    this.imageInterval = setInterval(()=> {

      if(this.current >= this.imgSrc.length-1)
        this.current = 0;
      else
        this.current++;

    },1000);
  }
  stop(){
    clearInterval(this.imageInterval)
  }
}
