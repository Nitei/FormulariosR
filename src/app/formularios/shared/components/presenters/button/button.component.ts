import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormPropInterface } from '../../../interfaces/form-prop.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() public data: FormPropInterface;
  
  @Output() public evClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  toClick( objectToOutput?: any ): void {
    this.evClick.emit( objectToOutput );
  }

}
