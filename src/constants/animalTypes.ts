import { AnimalTypes } from "../enums/animalTypes";
import { SelectData } from "../interfaces/AppInterfaces";
import { getAnimaltypeByValue } from "../utils/getAnimaltypeByValue";

export const animalTypesList: Readonly<SelectData[]> = [
  { value: AnimalTypes.DOG, label: getAnimaltypeByValue(AnimalTypes.DOG) },
  { value: AnimalTypes.CAT, label: getAnimaltypeByValue(AnimalTypes.CAT) },
  { value: AnimalTypes.BIRD, label: getAnimaltypeByValue(AnimalTypes.BIRD) },
  { value: AnimalTypes.FISH, label: getAnimaltypeByValue(AnimalTypes.FISH) },
  { value: AnimalTypes.HAMSTER, label: getAnimaltypeByValue(AnimalTypes.HAMSTER) },
  { value: AnimalTypes.RABBIT, label: getAnimaltypeByValue(AnimalTypes.RABBIT) },
  { value: AnimalTypes.OTHER, label: getAnimaltypeByValue(AnimalTypes.OTHER) },
  { value: AnimalTypes.DEFAULT, label: getAnimaltypeByValue(AnimalTypes.DEFAULT) },
];