import { Component, OnInit } from "@angular/core";
import { IPost } from "../post.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PostService } from "../post.service";
import { ICategories } from "src/app/categories.model";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"]
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  submitted = false;
  post: IPost;
  categories: ICategories[] = [
    { id: 1, name: "Angular" },
    { id: 2, name: "Spring" },
    { id: 3, name: "Java" }
  ];

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      category: ["", Validators.required],
      title: ["", Validators.required],
      description: ["", Validators.required],
      author: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.postForm.invalid) {
      return;
    }
    this.post = this.postForm.value;
    console.log("this.post ", this.post);
    this.postService.addPost(this.post).subscribe(post => {
      console.log("inside submit success");
      this.postForm.reset();
      this.submitted = false;
    });
  }
}
