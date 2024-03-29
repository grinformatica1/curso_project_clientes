import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CursoAngularComponent } from './curso-angular/curso-angular.component';
import { TesteComponent } from './teste/teste.component'

import { ClientesModule} from './clientes/clientes.module'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CursoAngularComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
