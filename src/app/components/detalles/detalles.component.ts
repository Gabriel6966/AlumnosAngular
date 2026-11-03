import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Alumno from '../../models/Alumno';
import Observacion from '../../models/Observacion';
import { ServiceAlumnos } from '../../service/service.alumnos';
@Component({ selector: 'app-detalles', templateUrl: './detalles.component.html', styleUrl: './detalles.component.css' })
export class DetallesComponent implements OnInit {
  public alumno!: Alumno;
  public observaciones: Array<Observacion> = [];
  constructor(private _service: ServiceAlumnos, private _activated: ActivatedRoute, private _cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this._activated.params.subscribe(params => {
      this._service.getAlumnoById(Number(params['idAlumno'])).subscribe({
        next: (data) => { this.alumno = data; this._cdr.detectChanges(); },
        error: (error) => console.error(error)
      });
      this._service.getObservaciones(Number(params['idAlumno'])).subscribe({
        next: (data) => { this.observaciones = data; this._cdr.detectChanges(); },
        error: (error) => console.error(error)
      });
    });
  }
}
