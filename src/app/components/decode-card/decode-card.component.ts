import {Component, Input} from '@angular/core';
import {DecodeService} from "../../services/decode/decode.service";


@Component({
  selector: 'app-decode-card',
  templateUrl: './decode-card.component.html',
  styleUrls: ['./decode-card.component.css']
})
export class DecodeCardComponent {
  @Input() input = '';
  @Input() output = '';
  @Input() losungswort = '';
  @Input() title = '';
  showError: boolean = false;

  constructor(private decodeService: DecodeService){

  }

  clearText(): void{
    this.input = "";
    this.losungswort = "";
    this.output = "";
  }

  decodeMessage(){
    this.showError = false;

    try{
      this.output = this.decodeService.decode(this.losungswort, this.input);
    } catch (exception){
      this.showError = true;
    }
  }
}
