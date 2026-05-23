import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { RouterLink } from '@angular/router';
import { Scertificado } from '../../_services/scertificado';
import { Icertificado } from '../../interfaces/icertificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados implements OnInit {
  certificados: Icertificado[] = [];
  constructor(private certificadoService: Scertificado) {}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
  }
}
