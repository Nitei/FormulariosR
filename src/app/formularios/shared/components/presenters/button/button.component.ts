import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormPropInterface } from '../../../interfaces/form-prop.interface';

@Component( {
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ]
} )
export class ButtonComponent implements OnInit {

  /**
   * @description Instancia del modelo con datos para el botón
   */
  @Input() public dataButton: FormPropInterface;

  /**
   * @description Emision del evento de click
   */
  @Output() public evClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description Emitimos el evento click sobre el botón al exterior
   */
  toClick( objectToOutput?: any ): void {
    this.evClick.emit( objectToOutput );
  }

}
