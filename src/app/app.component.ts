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
    { id: '1', label: 'Change Width' },
    { id: '2', label: 'Change Height' },
    { id: '3', label: 'Change Width & Height' },
    { id: '4', label: 'Change Color' },
    { id: '5', label: 'Default' },
  ];

  formControl = new FormControl({ id: '1', label: 'Tooltip Left' });
  formControlConfig = new FormControl({ id: '5', label: 'Default' });
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

    this.formControlConfig.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((val) => {
        let config;
        switch (val.id) {
          case '1':
            config = { width: 200 };
            this.config$.next(config);
            break;
          case '2':
            config = { height: 300 };
            this.config$.next(config);
            break;
          case '3':
            config = { ...this.config$.getValue(), height: 300, width: 200 };
            this.config$.next(config);
            break;
        }
      });
  }
}
