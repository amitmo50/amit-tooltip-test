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

  optionsLeft = [
    { id: '1', label: 'Option A', tooltip: 'ToolTip A' },
    { id: '2', label: 'Option B', tooltip: 'ToolTip B' },
    { id: '3', label: 'Option C', tooltip: 'ToolTip C' },
  ];

  optionsRight = [
    { id: '1', label: 'Option A', tooltip: 'ToolTip A' },
    { id: '2', label: 'Option B', tooltip: 'ToolTip B' },
    { id: '3', label: 'Option C', tooltip: 'ToolTip C' },
  ];

  optionsCenter = [
    { id: '1', label: 'Option A', tooltip: 'ToolTip A' },
    { id: '2', label: 'Option B', tooltip: 'ToolTip B' },
    { id: '3', label: 'Option C', tooltip: 'ToolTip C' },
  ];

  formControl = new FormControl({ id: '1', label: 'Tooltip Left' });
  formControlLeft = new FormControl({ id: '2', label: 'Checked B' });
  formControlRight = new FormControl({ id: '2', label: 'Checked B' });
  formControlCenter = new FormControl({ id: '2', label: 'Checked B' });

  showTooltipOption$ = new BehaviorSubject<any>(null);
  onDestroy$ = new Subject<void>();

  ngOnInit() {
    this.formControl.valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        startWith({ id: '1', label: 'Tooltip Left' })
      )
      .subscribe((val) => this.showTooltipOption$.next(val));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
