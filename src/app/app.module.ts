import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalComponent } from './proposal/proposal.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProposalNewComponent } from './proposal/proposal-new/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show/proposal-show.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    ProposalComponent,
    HomepageComponent,
    ProposalNewComponent,
    ProposalShowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgbDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
