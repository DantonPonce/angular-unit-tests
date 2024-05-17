import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-widget',
  standalone: true,
  providers: [UniqueIdService],
  imports: [FontAwesomeModule],
  templateUrl: './like-widget.component.html',
  styleUrl: './like-widget.component.scss',
})
export class LikeWidgetComponent implements OnInit {
  @Output() liked = new EventEmitter<void>();
  @Input() likes: number = 0;
  @Input() id: string = '';

  fonts = {
    faThumbsUp,
  };

  constructor(private uniqueIdService: UniqueIdService) {}

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueIdService.generateUniqueIdsWithPrefix('like-widget');
    }
  }

  like(): void {
    this.liked.emit();
  }
}