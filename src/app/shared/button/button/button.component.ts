import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() click = new EventEmitter<any>();
  @Input() label = '';
  @Input() icon = '';

  onClickSubmit(){
    this.click.emit();
  }

  onClickClear(){
    this.click.emit();
  }

}
