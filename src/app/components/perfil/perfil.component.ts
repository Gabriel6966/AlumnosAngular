import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAlumnos } from '../../service/service.alumnos';
import Usuario from '../../models/Usuario';
import Matricula from '../../models/Matricula';
@Component({ selector: 'app-perfil', templateUrl: './perfil.component.html', styleUrl: './perfil.component.css' })
export class PerfilComponent implements OnInit {
  public perfil!: Usuario;
  public show: boolean = false;
  public matriculas: Array<Matricula> = [];
  constructor(private _service: ServiceAlumnos, private _router: Router, private _cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this._service.getPerfil().subscribe({
      next: (data) => { this.perfil = data; this._cdr.detectChanges(); },
      error: (error) => console.error(error)
    });
  }
  historialMatricula() {
    this._service.getMatriculas().subscribe({
      next: (data) => { this.matriculas = data; this.show = true; this._cdr.detectChanges(); },
      error: (error) => console.error(error)
    });
  }
  matricular() { this._router.navigate(['/matricular']); }
}
