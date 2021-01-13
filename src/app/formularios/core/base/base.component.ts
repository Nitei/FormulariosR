import { Component, Input, OnInit, Output } from '@angular/core';
import { NameStepType } from '../../shared/types/name-step.type';
import { SecureNameType } from '../../shared/types/secure-name.type';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @Input() secureType: SecureNameType;

  constructor() { }

  ngOnInit(): void {
  }

}
