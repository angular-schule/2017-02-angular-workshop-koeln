import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent
  ]
})
export class BooksModule { }