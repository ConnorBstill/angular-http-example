import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

// The Lord of the Rings API that I'm using: https://the-one-api.dev/

import { lotrApiKey } from '../../secret';

@Injectable({
  providedIn: 'root'
})
export class LotrService {

  constructor(private readonly http: HttpClient) { }

  getBooks(): Promise<any> {
    return this.http.get(
      `${environment.lotrApiUrl}/book`,
      {
        headers: {
          Authorization: `Bearer ${lotrApiKey}`
        }
      }
    ).toPromise()
  }
}
