import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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

  showTooltipOption$ = new BehaviorSubject<string>('1');

  ngOnInit() {
    this.formControl.valueChanges.subscribe((val) => {
      console.log(val);
      this.showTooltipOption$.next(val);
    });
  }
}
