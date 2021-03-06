import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { CursoInterface } from '../models/cursointerface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursosCollections: AngularFirestoreCollection<CursoInterface>;
  cursos: Observable<CursoInterface[]>;
  cursoDoc: AngularFirestoreDocument<CursoInterface>;

  constructor(
    public afs: AngularFirestore
  ) {
    this.cursos = afs.collection('cursos_fav').valueChanges();

  }

  getCursos(){
    return this.cursos;
  }

}
