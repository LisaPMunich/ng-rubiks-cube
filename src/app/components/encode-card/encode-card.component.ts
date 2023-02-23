import {Component, Input} from '@angular/core';
import {EncodeService} from "../../services/encode/encode.service";


@Component({
  selector: 'app-encode-card',
  templateUrl: './encode-card.component.html',
  styleUrls: ['./encode-card.component.css']
})
export class EncodeCardComponent {
  @Input() input = '';
  @Input() output = '';
  @Input() losungswort = '';
  @Input() title = '';
  showError: boolean = false;

  constructor(
    public encodeService: EncodeService
  ) {
  }


  copyText(): void {
    const textField = document.getElementById('output') as HTMLTextAreaElement;
    textField.select();
    document.execCommand('copy');
  }

  encodeMessage() {
    this.showError = false;

    try {
      this.output = this.encodeService.encode(this.losungswort, this.input);
    } catch (exception) {
      this.showError = true;
    }
  }

}
