import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCompModule } from './mat-comp/mat-comp.module';
import { AppComponent } from './app.component';
import { MatabComponent } from './matab/matab.component';
import { NtIfElseComponent } from './nt-if-else/nt-if-else.component';


@NgModule({
  declarations: [
    AppComponent,
    MatabComponent,
    NtIfElseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCompModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
