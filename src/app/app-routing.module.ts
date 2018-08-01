import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyjavaComponent } from './myjava/myjava.component';
import { MyjavascriptComponent } from './myjavascript/myjavascript.component';
import { DemolaComponent } from './demola/demola.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'java', component: MyjavaComponent },
  { path: 'javascript', component: MyjavascriptComponent },
  { path: 'demola', component: DemolaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
