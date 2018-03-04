import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Post} from '../class/post';

@Injectable()
export class PostService {

  constructor(private _http: HttpClient) {
  }

  getPostList(): Observable<Post[]> {
    return this._http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .do(data => console.log('All : ' + JSON.stringify(data)));
  }
}
