import { Component } from '@angular/core';
import { TableService } from './service/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TableService]
})
export class AppComponent {
  title = 'angular-frontend';
}
