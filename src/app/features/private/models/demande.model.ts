export enum DemandeStatusModel {
    EN_ATTENTE = 'En attente',
    ACCEPTEE = 'Acceptée',
    REFUSEE = 'Refusée'
}
export enum SpecialiteModel {
    CARDIOLOGIE = 'Cardiologie',
    DERMATOLOGIE = 'Dermatologie',
    OPHTALMOLOGIE = 'Ophtalmologie',

}
export interface DemandeListModel {
    
    id: number;
    date: Date;
    statut: DemandeStatusModel;
    heure: string;
    specialite: SpecialiteModel;
    
}
