import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: Http
  ) {
    http.get(this.url)
    .subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
    .subscribe( response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
      console.log(response.json());
    });
  }

  updatePost(post) {
    this.http.put(this.url + '/' + post.id, JSON.stringify(post))
    .subscribe(response => {
      console.log(response.json());
    });
    //OR this, put patch is less supported at the moment
    //this.http.patch(this.url, JSON.stringify({ isRead: true}));
  }

  deletePost(post) {
    this.http.delete(this.url, + '/' + post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
