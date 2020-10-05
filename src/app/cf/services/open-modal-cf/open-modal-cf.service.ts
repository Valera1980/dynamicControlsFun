import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CfFormComponent } from '../../components/cf-form/cf-form.component';

@Injectable()
export class OpenModalCfService {

  constructor(
    public dialogService: DialogService
  ) { }

  add(): DynamicDialogRef {
    const config: DynamicDialogConfig = {
      header: 'Create cf',
      width: '70%',
    };
    const ref = this.dialogService.open(CfFormComponent, { ...config});
    return ref;
  }
}
