import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CfFormComponent } from '../../components/cf-form/cf-form.component';

@Injectable()
export class OpenModalCfService {

  constructor(
    public dialogService: DialogService
  ) { }

  add(): void {
    const config: DynamicDialogConfig = {
      header: 'Create cf',
      width: '70%',
    };
    const ref = this.dialogService.open(CfFormComponent, { ...config});
    // listen close result
    ref.onClose
    .pipe(filter(d => !!d))
    .subscribe(d => {

    });
  }
}
