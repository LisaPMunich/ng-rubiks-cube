import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() title = '';
  @Input() action = '';
  @Input() input = '';
  @Input() output = '';
  @Input() losungswort = '';
  @Input() icon = '';

  @Output() onClear = new EventEmitter<any>();
  @Output() onClick = new EventEmitter<any>();


  clear(): void{
    this.input = "";
    this.losungswort = "";
    this.output = "";
    this.onClear.emit();
  }

  handleButtonClick(){
    this.onClick.emit();
  }

}
