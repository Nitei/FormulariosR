import { Component, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-decesos',
  templateUrl: './decesos.component.html',
  styleUrls: ['./decesos.component.scss']
})
export class DecesosComponent implements OnInit {

  public testForm: FormGroup;
  private finish = new Subject();

  constructor( private fb: FormBuilder ) {
    this.testForm = this.fb.group( {
      name: ''
    } )
  }

  ngOnInit(): void {
    this.subs();
  }

  ngOnDestroy() {
    this.finish.next( true );
  }

  private subs() {
    this.testForm.valueChanges.pipe(
      takeUntil( this.finish ),
      tap( el => {
        console.log( el );
      } )
    ).subscribe();

  }

}
