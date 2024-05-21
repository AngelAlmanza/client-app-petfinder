import { AnimalTypes } from "../enums/animalTypes";

export const getAnimaltypeByValue = (value: AnimalTypes): string => {
  const types = {
    [AnimalTypes.DOG]: 'Perro',
    [AnimalTypes.CAT]: 'Gato',
    [AnimalTypes.BIRD]: 'Pájaro',
    [AnimalTypes.FISH]: 'Pez',
    [AnimalTypes.HAMSTER]: 'Hámster',
    [AnimalTypes.RABBIT]: 'Conejo',
    [AnimalTypes.OTHER]: 'Otro',
    [AnimalTypes.DEFAULT]: 'Selecciona una opción',
  };

  return types[value];
};