// time.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  textInput: any;
  ngOnInit() {
    this.updateWatch();
    setInterval(() => this.updateWatch(), 1000);
  }

  updateWatch() {
    const watchElement = document.getElementById('watch');

    if (watchElement) {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      watchElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
  }
}
