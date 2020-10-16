import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ModelDynComponent } from './cf/models/dyn-component.model';
import { CfModule } from './cf/cf.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { Observable, BehaviorSubject } from 'rxjs';
import * as models from './cf/models/monaco';
import { NgxIpModule} from 'ngx-ip-address';

export function onMonacoLoad(): void {

  console.log(models);
  const ls = [
    Observable,
    BehaviorSubject,
    ModelDynComponent,
    FormControl,
    FormGroup,
    FormsModule
  ].join('\n');

  const libUri = 'ts:filename/facts.d.ts';
  monaco.languages.typescript.javascriptDefaults.addExtraLib(ls, '');
  monaco.editor.createModel(ls, 'typescript', monaco.Uri.parse(''));
}
const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets',
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad
};
@NgModule({
  declarations: [
    AppComponent,
    ReactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CfModule,
    MonacoEditorModule.forRoot(monacoConfig),
    NgxIpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
