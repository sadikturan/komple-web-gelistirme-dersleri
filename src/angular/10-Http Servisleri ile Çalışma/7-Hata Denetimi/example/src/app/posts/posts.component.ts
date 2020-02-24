import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: [any];
  error;

  constructor(private postService: PostService) { }

  ngOnInit(): void {

    this.postService.getPosts()
      .subscribe(
        response => {
          this.posts = <[any]>response;
        },
        error => this.error = error);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value }
    input.value = '';

    this.postService.createPost(post)
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
      })
  }

  updatePost(post) {
    post.title = 'updated';
    this.postService.updatePost(post)
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.postService.deletePost(post)
      .subscribe(response => {
        console.log(response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
        error => this.error = error);
  }


}