import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentComponent } from './student/student.component';
import { CrudComponent } from './crud/crud.component';
import { SamplesComponent } from './samples/samples.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'student', component: StudentComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'sample', component: SamplesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
