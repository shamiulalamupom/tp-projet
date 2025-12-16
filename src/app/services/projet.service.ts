import { Injectable, signal } from '@angular/core';

export enum ProjetStatut {
  EnCours = 'En cours',
  Termine = 'Terminé',
}

export type Projet = { id: number; nom: string; statut: string };

@Injectable({ providedIn: 'root' })
export class ProjetService {
  private projetsSig = signal<Projet[]>([
    { id: 1, nom: 'Projet A', statut: 'En cours' },
    { id: 2, nom: 'Projet B', statut: 'Terminé' },
  ]);

  getAll() {
    return this.projetsSig;
  }

  getById(id: number) {
    return this.projetsSig().find((p) => p.id === id);
  }

  add(nom: string, statut: string) {
    const list = this.projetsSig();
    const nextId = list.length ? Math.max(...list.map((p) => p.id)) + 1 : 1;
    this.projetsSig.set([...list, { id: nextId, nom, statut }]);
  }
}
