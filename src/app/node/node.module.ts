import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NodeComponent } from './node.component';
import { LoadingModule } from '../_components/loading/loading.module';
import { PipesModule } from '../_pipes/pipes.module';
import { ErrorModule } from '../_components/error/error.module';

@NgModule({
  declarations: [NodeComponent],
  imports: [
    CommonModule,
    LoadingModule,
    PipesModule,
    ErrorModule,
    RouterModule.forChild([
      {
        path: '',
        component: NodeComponent
      }
    ])
  ]
})
export class NodeModule { }
