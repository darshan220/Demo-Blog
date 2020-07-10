import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import{Routes} from '@angular/router'
import {Post} from '../post'
import {PostService} from '../post.service';


@Component({
  selector: 'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls: ['./post-list.component.css'   ]
})
export class PostListComponent implements OnInit {
  posts:Observable<Post[]>
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts()
  }

  delete(id: string){
      this.postService.delete(id)
  }

}
