import { ModelDynComponent } from './cf/models/dyn-component.model';
import { CfModule } from './cf/cf.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { NativeMonacoComponent } from './native-monaco/native-monaco.component';
import { Observable, BehaviorSubject } from 'rxjs';

export function onMonacoLoad(): void {

  const ls = [
    Observable,
    BehaviorSubject,
    ModelDynComponent
  ].join('\n');

  const libUri = 'ts:filename/facts.d.ts';
  monaco.languages.typescript.javascriptDefaults.addExtraLib(ls, libUri);
  monaco.editor.createModel(ls, 'typescript', monaco.Uri.parse(libUri));
}
const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets',
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad
};
 
@NgModule({
  declarations: [
    AppComponent,
    ReactFormComponent,
    NativeMonacoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CfModule,
    MonacoEditorModule.forRoot(monacoConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
