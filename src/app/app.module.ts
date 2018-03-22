import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCompModule } from './mat-comp/mat-comp.module';
import { AppComponent } from './app.component';
import { MatabComponent } from './matab/matab.component';
import { NtIfElseComponent } from './nt-if-else/nt-if-else.component';
import { TapContainerComponent } from './tap-container/tap-container.component';
import { TapAComponent } from './tap-a/tap-a.component';
import { TapBComponent } from './tap-b/tap-b.component';
import { TapCComponent } from './tap-c/tap-c.component';
import { HttpNtModule } from './http-nt/http-nt.module';


@NgModule({
  declarations: [
    AppComponent,
    MatabComponent,
    NtIfElseComponent,
    TapContainerComponent,
    TapAComponent,
    TapBComponent,
    TapCComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCompModule,
    HttpNtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
