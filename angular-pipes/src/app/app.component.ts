import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  amount = 223.4567;
  channelName = "WebTechTalk";
  mark = 0.8945;
  today = new Date();
  name = "Surender Neelakantan";
}
