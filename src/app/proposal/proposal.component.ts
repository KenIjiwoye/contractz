import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ProposalService } from './proposal.service';
import {Proposal} from './proposal';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css'],
  providers: [ProposalService]
})
export class ProposalComponent implements OnInit {

  proposals: Proposal[];
  errorMessage:string;

  constructor(private propService:ProposalService, private router:Router) { }

  getProposals(){
    this.propService.getProposals()
        .subscribe(
          proposals => this.proposals = proposals,
          error => this.errorMessage = <any>error
        )
  }

  goToShow(proposal:Proposal){
    let link = ['/proposal', proposal.id];
    this.router.navigate(link);
  }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProposals());
  }

}
