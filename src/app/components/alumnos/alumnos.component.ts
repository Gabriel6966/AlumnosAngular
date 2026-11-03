import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Alumno from '../../models/Alumno';
import { ServiceAlumnos } from '../../service/service.alumnos';
@Component({ selector: 'app-alumnos', templateUrl: './alumnos.component.html', styleUrl: './alumnos.component.css' })
export class AlumnosComponent implements OnInit {
  public alumnos: Array<Alumno> = [];
  constructor(private _service: ServiceAlumnos, private _activated: ActivatedRoute, private _cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this._activated.params.subscribe(params => {
      this._service.getAlumnosByCurso(params['curso']).subscribe({
        next: (data) => { this.alumnos = data; this._cdr.detectChanges(); },
        error: (error) => console.error(error)
      });
    });
  }
}
