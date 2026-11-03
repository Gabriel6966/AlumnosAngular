import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Alumno from '../../models/Alumno';
import { ServiceAlumnos } from '../../service/service.alumnos';
@Component({ selector: 'app-matricular', templateUrl: './matricular.component.html', styleUrl: './matricular.component.css' })
export class MatricularComponent implements OnInit {
  public alumnos: Array<Alumno> = [];
  @ViewChild('selectalumno') selectalumno!: ElementRef;
  constructor(private _service: ServiceAlumnos, private _router: Router, private _cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this._service.getAlumnos().subscribe({
      next: (data) => { this.alumnos = data; this._cdr.detectChanges(); },
      error: (error) => console.error(error)
    });
  }
  matricular() {
    if (!this.selectalumno.nativeElement.value) return;
    this._service.matricularAlumno(Number(this.selectalumno.nativeElement.value)).subscribe({
      next: () => this._router.navigate(['/perfil']),
      error: (error) => console.error('Error al matricular', error)
    });
  }
}
