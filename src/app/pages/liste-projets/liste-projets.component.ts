import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjetService, Projet } from '../../services/projet.service';

@Component({
  selector: 'app-liste-projets',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './liste-projets.component.html',
})
export class ListeProjetsComponent {
  private projetService = inject(ProjetService);

  // No data stored here: just a read from the service
  projets: Signal<Projet[]> = this.projetService.getAll();
}
