import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-form-simple',
  templateUrl: './form-simple.component.html',
  styleUrls: ['./form-simple.component.scss']
})
export class FormSimpleComponent implements OnInit {

  @Input() formData: FormGroup;
  private finishSubs = new Subject();
  public dataButton = { text: 'boton', class: 'green' }

  constructor() {
  }

  ngOnInit(): void {
    this.subs();
  }

  ngOnDestroy() {
    this.finishSubs.next( true );
  }

  private subs() {
    this.formData.valueChanges.pipe(
      takeUntil( this.finishSubs ),
      tap( el => {
        console.log( el );
      } )
    ).subscribe();
  }

  public getFormProp( nameProp: string ): any {
    console.log( this.formData.get( nameProp ).value);
    return this.formData.get( nameProp ).value;
  }



}
