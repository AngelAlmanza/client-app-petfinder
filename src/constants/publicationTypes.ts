import { SelectData } from '../interfaces/AppInterfaces';

export enum PublicationTypes {
  ADOPT = 'adopt',
  LOST = 'lost',
  FOUND = 'found',
  DEFAULT = '',
}

export const publicationTypesList: Readonly<SelectData[]> = [
  { value: PublicationTypes.ADOPT, label: 'Adopción' },
  { value: PublicationTypes.LOST, label: 'Perdida' },
  { value: PublicationTypes.FOUND, label: 'Encontrada' },
  { value: PublicationTypes.DEFAULT, label: 'Selecciona una opción' },
];