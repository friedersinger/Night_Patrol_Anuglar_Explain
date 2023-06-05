import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { UmlComponent } from './uml/uml.component';
import { TimeComponent } from './time/time.component';
import { ExplainComponent } from './explain/explain.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'uml', component: UmlComponent },
  { path: 'home', component: StartScreenComponent },
  { path: 'time', component: TimeComponent },
  { path: 'explain', component: ExplainComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
