import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfListComponent } from './components/cf-list/cf-list.component';
import { CfListItemComponent } from './components/cf-list-item/cf-list-item.component';



@NgModule({
  declarations: [CfListComponent, CfListItemComponent],
  imports: [
    CommonModule
  ]
})
export class CfSettingsModule { }
