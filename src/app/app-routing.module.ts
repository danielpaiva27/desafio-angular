import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component/first-component.component';
import { SiginComponentComponent } from './sigin-component/sigin-component/sigin-component.component';
import { StoreComponentComponent } from './store-component/store-component/store-component.component';

const routes: Routes = [
  {path:'', component: FirstComponentComponent},
  {path:'sigin', component: SiginComponentComponent},
  {path:'store', component: StoreComponentComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
