import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

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
  worldOpenState = false;
  characterOpenState = false;
  endbossOpenState = false;
  drawableObjectOpenState = false;
  movableObjectOpenState = false;
  throwableOpenState = false;
  gangsterOpenState = false;
  cloudOpenState = false;
  statusBarOpenState = false;
  fullscreenOpenState = false;
  backgroundObjectOpenState = false;
  keyboardOpenState = false;
  levelOpenState = false;
  coinsOpenState = false;
  waterBombOpenState = false;
  smallCoinOpenState = false;
  smallWaterBombOpenState = false;

  constructor() {}

  ngOnInit(): void {}

  // openAllPanels() {
  //   this.worldOpenState = true;
  //   this.characterOpenState = true;
  //   this.endbossOpenState = true;
  //   this.drawableObjectOpenState = true;
  //   this.movableObjectOpenState = true;
  //   this.throwableOpenState = true;
  //   this.gangsterOpenState = true;
  //   this.cloudOpenState = true;
  //   this.statusBarOpenState = true;
  //   this.fullscreenOpenState = true;
  //   this.backgroundObjectOpenState = true;
  //   this.keyboardOpenState = true;
  //   this.levelOpenState = true;
  //   this.coinsOpenState = true;
  //   this.waterBombOpenState = true;
  //   this.smallCoinOpenState = true;
  //   this.smallWaterBombOpenState = true;
  // }
}
