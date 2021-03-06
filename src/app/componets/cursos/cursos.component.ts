import { Component, OnInit } from '@angular/core';
import { CursoInterface } from '../../models/cursointerface';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(
    private cursoService: CursoService
  ) { }

  ngOnInit() {
    this.cursoService.getCursos().subscribe(cursos => {
      console.log(cursos);
    })
  }

}
