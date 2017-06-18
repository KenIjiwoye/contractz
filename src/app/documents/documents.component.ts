import { Component, OnInit } from '@angular/core';
import {Document} from './document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents: Document[] = [
    {
      title: "My first doc",
      description: "sjfkld;ajfadkl;ads",
      file_url: "http://google.com",
      updated_at: "06/17/2017",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"

    },
    {
      title: "My second doc",
      description: "sjfkld;ajfadkl;ads",
      file_url: "http://google.com",
      updated_at: "06/17/2017",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"

    },
    {
      title: "My third doc",
      description: "sjfkld;ajfadkl;ads",
      file_url: "http://google.com",
      updated_at: "06/17/2017",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
