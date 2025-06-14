import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirComponent } from './components/directives/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/directives/attribute-dir/attribute-dir.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './components/controlFlow/for-switch/for.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './components/apiIntegration/post-api/post-api.component';

export const routes: Routes = [
  {
    path: 'add-emp',
    component: AddEmployeeComponent,
  },
  {
    path: 'emp-list',
    component: EmployeesListComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'structural-dir',
    component: StructuralDirComponent,
  },
  {
    path: 'attribute-dir',
    component: AttributeDirComponent,
  },
  {
    path: 'if-else',
    component: IfelseComponent,
  },
  {
    path: 'for-switch',
    component: ForComponent,
  },
  {
    path: 'pipe',
    component: PipeComponent,
  },
  {
    path: 'template-form',
    component: TemplateComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveComponent,
  },
  {
    path: 'get-api',
    component: GetApiComponent,
  },
  {
    path: 'post-api',
    component: PostApiComponent,
  },
];
