import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  options = [
    { id: '1', label: 'Tooltip Left' },
    { id: '2', label: 'Tooltip Right' },
    { id: '3', label: 'Tooltip Center' },
  ];

  optionsTwo = [
    { id: '1', label: 'Width: 300' },
    { id: '2', label: 'Width: 400' },
    { id: '3', label: 'Width: 500' },
  ];

  formControl = new FormControl({ id: '1', label: 'Tooltip Left' });
  formControlConfig = new FormControl({ id: '1', label: 'Tooltip Left' });
  config$ = new BehaviorSubject<any>(null);
  showTooltipOption$ = new BehaviorSubject<any>(null);

  private onDestroy$ = new Subject<void>();

  ngOnInit() {
    this.initListeners();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  initListeners() {
    this.formControl.valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        startWith({ id: '1', label: 'Tooltip Left' })
      )
      .subscribe((val) => {
        this.showTooltipOption$.next(val);
      });
  }
}
