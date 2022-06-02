import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = [
    { id: '1', label: 'Option A', tooltip: 'ToolTip A' },
    { id: '2', label: 'Option B', tooltip: 'ToolTip B' },
    { id: '3', label: 'Option C', tooltip: 'ToolTip C' },
  ];
  formControl = new FormControl({ id: 2, label: 'Checked B' });
}
