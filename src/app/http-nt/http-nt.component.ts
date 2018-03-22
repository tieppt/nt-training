import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService, IPost } from './post.service';
import { Subscription } from 'rxjs/Subscription';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ptt-http-nt',
  templateUrl: './http-nt.component.html',
  styleUrls: ['./http-nt.component.scss']
})
export class HttpNtComponent implements OnInit, OnDestroy {
  posts: Array<IPost>;
  subscription: Subscription;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.subscription = this.postService.getAllPosts()
      .subscribe(
        res => this.posts = res
      );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
