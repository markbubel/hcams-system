import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationComponent } from './application/application.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'application',      component: ApplicationComponent },
  { path: '',
  component: DashboardComponent,
  pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    ApplicationComponent,
    ContactComponent,
    PageNotFoundComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
