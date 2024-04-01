import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AImeaningComponent } from './components/aimeaning/aimeaning.component';
import { OutcomeComponent } from './components/outcome/outcome.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { PersonalPerspectiveComponent } from './components/personal-perspective/personal-perspective.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AImeaningComponent,
    OutcomeComponent,
    StrategyComponent,
    PersonalPerspectiveComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
