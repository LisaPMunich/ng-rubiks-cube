import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() onClick = new EventEmitter<any>();
  @Input() label = '';
  @Input() icon = '';

  click(){
    this.onClick.emit();
  }

}
