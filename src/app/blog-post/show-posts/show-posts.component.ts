import { Component, OnInit } from '@angular/core';
import { IPost } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent implements OnInit {

  posts:IPost[];

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts():void{
    this.postService.getAllPosts().subscribe((posts) =>{
      this.posts =posts;
      console.log("this.posts ", this.posts);
    }     
    );
  }

}
