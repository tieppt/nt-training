import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpNtComponent } from './http-nt.component';
import { PostService } from './post.service';

const COMP = [
  HttpNtComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [...COMP],
  exports: [...COMP],
  providers: [
    PostService
  ]
})
export class HttpNtModule { }
