import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Alumno from '../../models/Alumno';
import { ServiceAlumnos } from '../../service/service.alumnos';
@Component({ selector: 'app-home', templateUrl: './home.component.html', styleUrl: './home.component.css' })
export class HomeComponent implements OnInit {
  public alumnos: Array<Alumno> = [];
  constructor(private _service: ServiceAlumnos, private _cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this._service.getAlumnos().subscribe({
      next: (data) => { this.alumnos = data; this._cdr.detectChanges(); },
      error: (error) => console.error(error)
    });
  }
}
