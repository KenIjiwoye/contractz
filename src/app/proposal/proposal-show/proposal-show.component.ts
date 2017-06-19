import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { ProposalService } from '../proposal.service';
import { Observable } from 'rxjs/Rx';
import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.css'],
  providers: [ProposalService]
})
export class ProposalShowComponent implements OnInit {
  id:number;
  routeId:any;
  constructor(
    private route: ActivatedRoute,
    private propService:ProposalService,
    private http:Http
  ) { }

  @Input()
  proposal: Proposal;

  ngOnInit(): void {
    let proposalRequest = this.route.params
        .flatMap((params: Params) =>
        this.propService.getProposal(+params['id']));
    proposalRequest.subscribe(response => this.proposal = response.json());
  }

}
