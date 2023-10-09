import { Component } from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  images: string[] = [
    '/assets/aboutus/Aboutus1.png',
    '/assets/aboutus/Aboutus2.png',
    '/assets/aboutus/Aboutus3.png',
    '/assets/aboutus/Aboutus4.png',
    '/assets/aboutus/Aboutus5.png',
  ];
  currentImageIndex: number = 0;
  ngOnInit(): void {
  }
  nextImage() {
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0;
    }
  }

  previousImage() {
    this.currentImageIndex--;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    }
  }


}
