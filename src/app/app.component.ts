import { Component } from '@angular/core';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LikeWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-unit-tests';

}
