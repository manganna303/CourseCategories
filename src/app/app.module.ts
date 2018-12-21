import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogPostModule } from "./blog-post/blog-post.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BlogPostModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
