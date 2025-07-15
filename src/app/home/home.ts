import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Review } from '../services/review';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  reviewService = inject(Review)
  ngOnInit() {

    this.getAllreviews();
    this.chunkAward(3, this.awards);
    this.chunkItems(3, this.items)
  }
  items = [
    {
      title: 'Exceptional Service!',
      text: 'Exceptional branding service! I was thoroughly impressed and delighted...',
      rating: 5,
      reviewer: {
        name: 'Wade Warren',
        location: 'USA, California',
        avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    },
    {
      title: 'Super Quick Delivery',
      text: 'Delivered within hours! Very impressed.',
      rating: 4,
      reviewer: {
        name: 'Jane Doe',
        location: 'UK, London',
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    },
    {
      title: 'Super Quick Delivery',
      text: 'Delivered within hours! Very impressed.',
      rating: 4,
      reviewer: {
        name: 'Jane Doe',
        location: 'UK, London',
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    }, {
      title: 'Super Quick Delivery',
      text: 'Delivered within hours! Very impressed.',
      rating: 4,
      reviewer: {
        name: 'Jane Doe',
        location: 'UK, London',
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    }, {
      title: 'Super Quick Delivery',
      text: 'Delivered within hours! Very impressed.',
      rating: 4,
      reviewer: {
        name: 'Jane Doe',
        location: 'UK, London',
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    }, {
      title: 'Super Quick Delivery',
      text: 'Delivered within hours! Very impressed.',
      rating: 4,
      reviewer: {
        name: 'Jane Doe',
        location: 'UK, London',
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    },
    // Add more items...
  ];

  chunkedItems: any[][] = [];



  chunkItems(size: number, items: any) {
    this.chunkedItems = [];
    for (let i = 0; i < items.length; i += size) {
      this.chunkedItems.push(items.slice(i, i + size));
    }
  }

  getStars(count: number): number[] {
    return Array(count).fill(0);
  }

  getAllreviews() {
    // this.chunkItems(3, this.items);
    this.reviewService.getAllReviews().subscribe({
      next: (value) => {
        console.log(value);
        if (value.data.length) {
          this.chunkItems(3, value.data);
        } else {

        }
      }
    })
  }

  awards = [
    {
      image: '/Images/Blog Img 1.png',
      title: 'Wins 2023 good design<br>London Award',
      link: '#'
    },
    {
      image: '/Images/Blog Img 2.png',
      title: 'Top Innovation in UX<br>Paris Awards',
      link: '#'
    },
    {
      image: '/Images/Blog Img 3.png',
      title: 'Best Startup 2024<br>Global Tech Forum',
      link: '#'
    },
    {
      image: '/Images/Blog Img 1.png',
      title: 'UI Excellence<br>Dubai 2024',
      link: '#'
    }
  ];

  chunkedAwards: any[] = [];
  chunkAward(size: number, items: any) {
    for (let i = 0; i < items.length; i += size) {
      this.chunkedAwards.push(items.slice(i, i + size));
    }
  }
}
