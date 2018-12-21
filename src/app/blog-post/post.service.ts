import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { IPost } from "./post.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ReturnStatement } from "@angular/compiler";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}

  private url = "http://localhost:4000/posts";

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url).pipe(
      tap(() => {
        console.log("fetched the all posts");
      })
    );
  }

  addPost(post: IPost): Observable<IPost> {
    return this.http.post(this.url, post, httpOptions).pipe(
      tap((hero: IPost) => {
        console.log("added new post");
      }),
      catchError(this.handleError<IPost>("addPost"))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
