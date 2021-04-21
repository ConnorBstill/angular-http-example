import { Component, OnInit } from '@angular/core';

import { LotrService } from './services/lotr.service';

interface Book {
  _id?: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public lotrTrilogyBooks: Book[] = []

  constructor(private readonly lotrService: LotrService) {}

  ngOnInit() {
    this.lotrService.getBooks().then(res => {
      this.lotrTrilogyBooks = res.docs;
      console.log('res', res)
    })
  }
}
