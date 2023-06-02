import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent implements OnInit {
  title: string = 'Night_Patrol_Angular';

  constructor() {}

  ngOnInit(): void {
    this.handleStrongElements();
    this.setupOpenAllButton();
    this.includeHTML();
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

        if (isOpen) {
          openAllButton.innerText = 'Close All';
          openAllButton.style.backgroundColor = 'red';
        } else {
          openAllButton.innerText = 'Open All';
          openAllButton.style.backgroundColor = '#4CAF50';
        }
      });
    }
  }

  private async includeHTML(): Promise<void> {
    const includeElements: NodeListOf<HTMLElement> =
      document.querySelectorAll('[w3-include-html]');
    const elementsArray: HTMLElement[] = Array.from(includeElements);

    for (const element of elementsArray) {
      const file: string | null = element.getAttribute('w3-include-html'); // "includes/header.html"
      if (file) {
        const resp: Response = await fetch(file);
        if (resp.ok) {
          element.innerHTML = await resp.text();
        } else {
          element.innerHTML = 'Page not found';
        }
      }
    }
  }
}
