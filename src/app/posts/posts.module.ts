import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';

import { PostService } from './post.service';


const routes: Routes=[
  {path:'blog',component: PostListComponent},
  {path:'blog/:id',component: PostDetailsComponent},
  {path:'dashboard',component: PostDashboardComponent}
]


@NgModule({

  imports: [
    SharedModule,RouterModule.forChild(routes)
  ],
  declarations: [PostDashboardComponent, PostDetailsComponent, PostListComponent],
  providers:[PostService]
})
export class PostsModule { }
