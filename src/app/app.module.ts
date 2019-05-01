import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { convertToSpacePipe } from './shared/convert-to-space-pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductService } from './shared/product.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    convertToSpacePipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent,  pathMatch: 'full' },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
  ])
  ],
  providers: [ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
