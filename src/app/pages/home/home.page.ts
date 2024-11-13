import { Component, OnInit } from '@angular/core';
import { GiftcardsService } from '../../services/giftcards.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  baseUrl = environment.baseUrl;
  giftCards: any[] = [];

  constructor(private giftcardsService: GiftcardsService) {}

  ngOnInit() {
    this.fetchGiftCards();
  }

  fetchGiftCards() {
    this.giftcardsService.getGiftCards().subscribe(
      (data) => {
        this.giftCards = data;
      },
      (error) => {
        console.error('Error fetching gift cards:', error);
      }
    );
  }

  

}
