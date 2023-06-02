import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { UmlComponent } from './uml/uml.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'uml', component: UmlComponent },
  { path: 'home', component: StartScreenComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
