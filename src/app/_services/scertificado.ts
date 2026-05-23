import { Injectable } from '@angular/core';
import { Icertificado } from '../interfaces/icertificado';

@Injectable({
  providedIn: 'root',
})
export class Scertificado {
  certificados: Icertificado[] = [];

  constructor() { }

  adicionarCertificado(certificado: Icertificado) {
    this.certificados.unshift({...certificado});
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
