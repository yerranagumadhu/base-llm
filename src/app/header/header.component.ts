import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {  
  openProfile() {
    console.log('profile opened');
  }

  @Output() toggleSidebar = new EventEmitter<void>();

  onMenuClick() {
    this.toggleSidebar.emit();
  }

}
