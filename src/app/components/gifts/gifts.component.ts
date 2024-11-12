import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiftcardsService } from '../../services/giftcards.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss'],
})
export class GiftsComponent implements OnInit {
  giftCard: any;
  baseUrl = environment.baseUrl;

  constructor(
    private route: ActivatedRoute,
    private giftcardsService: GiftcardsService
  ) { }

  ngOnInit() {
    const giftCardId = this.route.snapshot.paramMap.get('id');

    if (giftCardId) {
      this.giftcardsService.getGiftCardById(giftCardId).subscribe(
        (data) => {
          console.log('Fetched Gift Card:', data);  
          this.giftCard = data;
        },
        (error) => {
          console.error('Error fetching gift card:', error);
        }
      );
    }
  }

}
