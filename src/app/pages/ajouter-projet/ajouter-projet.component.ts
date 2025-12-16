import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetService, ProjetStatut } from '../../services/projet.service';

@Component({
  selector: 'app-ajouter-projet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter-projet.component.html',
})
export class AjouterProjetComponent {
  private projetService = inject(ProjetService);
  private router = inject(Router);

  nom = '';
  statut: ProjetStatut = ProjetStatut.EnCours;
  statutEnum = ProjetStatut;

  submit() {
    // no business logic: just call the service
    this.projetService.add(this.nom.trim(), this.statut.trim());
    this.router.navigateByUrl('/');
  }
}
