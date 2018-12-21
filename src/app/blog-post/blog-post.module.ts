import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShowPostsComponent } from "./show-posts/show-posts.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  { path: "showposts", component: ShowPostsComponent },
  { path: "addpost", component: AddPostComponent },
  { path: " ", component: ShowPostsComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowPostsComponent, AddPostComponent]
})
export class BlogPostModule {}
