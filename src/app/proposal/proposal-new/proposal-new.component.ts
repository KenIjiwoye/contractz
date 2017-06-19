import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Proposal} from '../proposal';
import {ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.css'],
  providers: [ProposalService]
})
export class ProposalNewComponent implements OnInit {
  proposal = new Proposal;
  submitted: boolean = false;
  constructor(private propService:ProposalService) { }

  createProposal(proposal){
    this.submitted = true;
    this.propService.createProposal(proposal)
        .subscribe(
          data => {return true},
          error => {
            console.log('Error saving proposal');
            return Observable.throw(error);
          }
        );
  }
  ngOnInit() {
  }

}
