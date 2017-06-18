import { Component, OnInit } from '@angular/core';
import {Proposal} from './proposal';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  proposalOne: Proposal = new Proposal(23, 'BMW NA', 'http://kwoye.me', 'Angular and Ruby on Rails', 125, 75, 12, 'me@kwoye.me'
)
  proposalTwo: Proposal = new Proposal(23, 'MBUSA NA', 'http://kwoye.me', 'Angular and Ruby on Rails', 125, 75, 12, 'me@kwoye.me'
)
  proposalThree: Proposal = new Proposal(23, 'Bentley NA', 'http://kwoye.me', 'Angular and Ruby on Rails', 125, 75, 12, 'me@kwoye.me'
)

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
  constructor() { }

  ngOnInit() {
  }

}
