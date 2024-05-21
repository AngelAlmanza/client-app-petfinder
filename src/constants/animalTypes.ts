import { SelectData } from "../interfaces/AppInterfaces";

export enum AnimalTypes {
  DOG = 'dog',
  CAT = 'cat',
  BIRD = 'bird',
  FISH = 'fish',
  HAMSTER = 'hamster',
  RABBIT = 'rabbit',
  OTHER = 'other',
  DEFAULT = '',
}

export const animalTypesList: Readonly<SelectData[]> = [
  { value: AnimalTypes.DOG, label: 'Perro' },
  { value: AnimalTypes.CAT, label: 'Gato' },
  { value: AnimalTypes.BIRD, label: 'Pájaro' },
  { value: AnimalTypes.FISH, label: 'Pez' },
  { value: AnimalTypes.HAMSTER, label: 'Hámster' },
  { value: AnimalTypes.RABBIT, label: 'Conejo' },
  { value: AnimalTypes.OTHER, label: 'Otro' },
  { value: AnimalTypes.DEFAULT, label: 'Selecciona una opción' },
];