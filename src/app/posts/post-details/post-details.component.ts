import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {PostService} from '../post.service'
 
import {Post} from '../post'
import { AuthService } from 'src/app/core/auth.service';
@Component({
  selector: "app-post-details",
  templateUrl:"./post-details.component.html",
  styleUrls: ["./post-details.component.css" ]
})
export class PostDetailsComponent implements OnInit {

    post: Post; 

    editing: boolean = false  
  constructor(
    private route:ActivatedRoute,
    private router: Router,
    public auth:AuthService,
    private postService: PostService
  ) { }

  ngOnInit() {
       this.getPost();
      
  } 

  getPost(){
    const id = this.route.snapshot.paramMap.get("id");
    return this.postService
    .getPostData(id)
    .subscribe(data => (this.post = data));
  }

  delete(){
    const id=this.route.snapshot.paramMap.get("id");
    this.postService.delete(id)
    this.router.navigate(["/blog"])
  }
}
