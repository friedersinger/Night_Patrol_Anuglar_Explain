import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent implements OnInit {
  title: string = 'Night_Patrol_Angular';
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  toggleText = 'Slide me, to open!';

  constructor() {}

  ngOnInit(): void {
    this.handleStrongElements();
    this.setupOpenAllButton();
  }

  private handleStrongElements(): void {
    const strongElements: NodeListOf<HTMLElement> =
      document.querySelectorAll('strong');
    strongElements.forEach((strongElement: HTMLElement) => {
      const paragraph: HTMLElement | any = strongElement.nextElementSibling;
      strongElement.addEventListener('click', () => {
        if (paragraph) {
          paragraph.style.display =
            window.getComputedStyle(paragraph).display === 'none'
              ? 'block'
              : 'none';
        }
      });
    });
  }

  private setupOpenAllButton(): void {
    const openAllButton: HTMLElement | null =
      document.getElementById('openAllButton');
    if (openAllButton) {
      openAllButton.addEventListener('click', () => {
        const paragraphs: NodeListOf<HTMLElement> =
          document.querySelectorAll('.description');
        const isOpen: boolean =
          window.getComputedStyle(paragraphs[0]).display === 'none';

        paragraphs.forEach((paragraph: HTMLElement) => {
          paragraph.style.display = isOpen ? 'block' : 'none';
        });

        this.toggleText = isOpen
          ? 'Slide me, to close all!'
          : 'Slide me, to open all!';
      });
    }
  }
}
