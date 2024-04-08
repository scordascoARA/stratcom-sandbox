import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CesiumDirective } from './cesium.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CesiumDirective, CommonModule, RouterOutlet],
  template: '<div appCesium></div>'
})
export class AppComponent {
  title = 'stratcom-proto';
}
