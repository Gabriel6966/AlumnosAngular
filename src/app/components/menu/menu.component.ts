import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAlumnos } from '../../service/service.alumnos';
@Component({ selector: 'app-menu', templateUrl: './menu.component.html', styleUrl: './menu.component.css' })
export class MenuComponent implements OnInit {
  public cursos: Array<string> = [];
  constructor(private _service: ServiceAlumnos, private _router: Router, private _cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this._service.getCursos().subscribe({
      next: (data) => { this.cursos = data; this._cdr.detectChanges(); },
      error: (error) => console.error(error)
    });
  }
  cerrarSesion(): void {
    localStorage.removeItem('authToken');
    this._router.navigate(['/']);
  }
}
