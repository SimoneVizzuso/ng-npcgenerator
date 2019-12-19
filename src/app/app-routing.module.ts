import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  { path: "homepage",
    component: HomepageComponent
  },
  { path: "info",
    component: InfoComponent
  },
  { path: "", redirectTo: "homepage", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
