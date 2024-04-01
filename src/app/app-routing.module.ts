import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AImeaningComponent } from './components/aimeaning/aimeaning.component';
import { OutcomeComponent } from './components/outcome/outcome.component';
import { PersonalPerspectiveComponent } from './components/personal-perspective/personal-perspective.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/navbar', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'AImeaning', component: AImeaningComponent },
  { path: 'outcome', component: OutcomeComponent },
  { path: 'personalPerspective', component: PersonalPerspectiveComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
