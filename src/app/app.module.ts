import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule} from 'angularfire2';

import { CursoService } from './services/curso.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { CursosComponent } from './componets/cursos/cursos.component';
import { AddCursoComponent } from './componets/add-curso/add-curso.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursosComponent,
    AddCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'demoaab'),
    AngularFirestoreModule

  ],
  providers: [ CursoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
