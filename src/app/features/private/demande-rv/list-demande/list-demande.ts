import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemandeListModel } from '../../models/demande.model';
import { DemandeStatusModel } from '../../models/demande.model';
import { SpecialiteModel } from '../../models/demande.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-demande',
  imports: [RouterLink, CommonModule],
  templateUrl: './list-demande.html',
  styleUrl: './list-demande.css',
})
export class ListDemande {
  title: string = "Mes Demandes de Rendez-vous"
  demandes: DemandeListModel[] = [
    { id: 1, date: new Date('2024-07-01'), heure: '10:00', statut: DemandeStatusModel.EN_ATTENTE ,specialite: SpecialiteModel.CARDIOLOGIE}, 
    { id: 2, date: new Date('2024-07-05'), heure: '14:00', statut: DemandeStatusModel.ACCEPTEE , specialite: SpecialiteModel.DERMATOLOGIE},
    { id: 3, date: new Date('2024-07-10'), heure: '09:00', statut: DemandeStatusModel.REFUSEE , specialite: SpecialiteModel.OPHTALMOLOGIE},
  ];
}
