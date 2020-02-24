import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: [any];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {

    http.get(this.url)
      .subscribe(response => {
        this.posts = <[any]>response;
      })

  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value }
    input.value='';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
      })
  }

  updatePost(post) {
    post.title = 'updated';

    this.http.put(this.url + '/' + post.id, JSON.stringify(post))
      .subscribe(response => {
        console.log(response);
      });
    // this.http.patch(this.url + '/' + post.id, JSON.stringify({
    //   title: 'updated'
    // }))
  }

  deletePost(post) {
    this.http.delete(this.url + '/'+post.id)
      .subscribe(response => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      })
  }


}