import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CfFormComponent } from '../../components/cf-form/cf-form.component';
import { ModelDynComponent } from '../../models/dyn-component.model';

@Injectable()
export class OpenModalCfService {

  constructor(
    public dialogService: DialogService
  ) { }

  add(): DynamicDialogRef {
    const config: DynamicDialogConfig = {
      header: 'Create new custom field',
      width: '70%',
      data: {
        mode: 'add',
        model: new ModelDynComponent()
      }
    };
    const ref = this.dialogService.open(CfFormComponent, { ...config});
    return ref;
  }
  edit(m: ModelDynComponent): DynamicDialogRef {
    const config: DynamicDialogConfig = {
      header: `Edit custom field "${m.name}"`,
      width: '70%',
      data: {
        mode: 'edit',
        model: m
      }
    };
    const ref = this.dialogService.open(CfFormComponent, { ...config});
    return ref;
  }
}
