import { Component, ElementRef, ViewChild } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Icertificado } from '../../interfaces/icertificado';
import { Scertificado } from '../../_services/scertificado';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class Certificado {
  id: string | null = null;
  certificado: Icertificado | undefined;

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(private certificadoService: Scertificado, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(item => item.id == this.id);
    });
  }

  downloadCertificado() {
    html2canvas(this.certificadoElement.nativeElement, {scale: 3}).then(
      canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `certificado_${this.certificado?.nome.replaceAll(' ', '_')}.png`;
        link.click();
      }
    )
  }
}
