import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseUi } from "./_components/base-ui/base-ui";
import { Navbar } from "./_components/navbar/navbar";
import { Scertificado } from './_services/scertificado';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'gerador-certificado';
  exibeNavBar: boolean = false;

  constructor(private certificadoService: Scertificado) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
