import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent {
  @Input() id=0;
  @Input() departure="Milano";
  @Input() arrival="Siracusa";
  @Input() date="01/01/23";
  @Input() time = "03:30";
}

