import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  images = [
    './image/Picture1.png',
    './image/Picture2.png',
    './image/Picture3.png'
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.autoSlide();
  }

  autoSlide(): void {
    // setInterval(() => {
    //   this.next(); // หมุนอัตโนมัติ
      
    // }, 3000);
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
