import { PublicationTypes } from "../enums/publicationTypes";

export const getTypeByValue = (value: PublicationTypes): string => {
  const types = {
    [PublicationTypes.ADOPT]: 'Adopción',
    [PublicationTypes.LOST]: 'Perdida',
    [PublicationTypes.FOUND]: 'Encontrada',
    [PublicationTypes.DEFAULT]: 'Selecciona una opción',
  };
  return types[value];
};