import { PublicationTypes } from '../enums/publicationTypes';
import { SelectData } from '../interfaces/AppInterfaces';
import { getTypeByValue } from '../utils/getTypeByValue';

export const publicationTypesList: Readonly<SelectData[]> = [
  { value: PublicationTypes.ADOPT, label: getTypeByValue(PublicationTypes.ADOPT) },
  { value: PublicationTypes.LOST, label: getTypeByValue(PublicationTypes.LOST) },
  { value: PublicationTypes.FOUND, label: getTypeByValue(PublicationTypes.FOUND) },
  { value: PublicationTypes.DEFAULT, label: getTypeByValue(PublicationTypes.DEFAULT) },
];