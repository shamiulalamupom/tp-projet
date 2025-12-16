import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjetService, Projet } from '../../services/projet.service';

@Component({
  selector: 'app-detail-projet',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-projet.component.html',
})
export class DetailProjetComponent {
  private route = inject(ActivatedRoute);
  private projetService = inject(ProjetService);

  projet?: Projet;
  notFound = false;

  ngOnInit() {
    const idStr = this.route.snapshot.paramMap.get('id');
    const id = idStr ? Number(idStr) : NaN;

    if (!Number.isFinite(id)) {
      this.notFound = true;
      return;
    }

    const p = this.projetService.getById(id);
    if (!p) {
      this.notFound = true;
      return;
    }

    this.projet = p;
  }
}
