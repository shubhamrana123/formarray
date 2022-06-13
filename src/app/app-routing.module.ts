import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayConceptsComponent } from './components/form-array-concepts/form-array-concepts.component';

const routes: Routes = [
  {path:'',component:FormArrayConceptsComponent},
  {path:'formarray',component:FormArrayConceptsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
