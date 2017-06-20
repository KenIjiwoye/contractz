import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProposalComponent } from './proposal/proposal.component';
import { ProposalNewComponent } from './proposal/proposal-new/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show/proposal-show.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'proposals',
    component: ProposalComponent
  },
  {
    path: 'proposals/new',
    component: ProposalNewComponent
  },
  {
    path: 'proposal/:id',
    component: ProposalShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
