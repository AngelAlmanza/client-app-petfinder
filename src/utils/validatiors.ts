const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password: string): boolean => {
  const lengthRequirement = password.length >= 8;
  const uppercaseRequirement = /[A-Z]/.test(password);
  const numberRequirement = /[0-9]/.test(password);
  return lengthRequirement && uppercaseRequirement && numberRequirement;
};

const isValidPetType = (animaltype: string): boolean => {
  const uppercaseRequirement = /[A-Z]/.test(animaltype);
  const numberRequirement = !/\d/.test(animaltype);
  return uppercaseRequirement && numberRequirement;
};
const isValidRace = (race: string): boolean => {
  const uppercaseRequirement = /[A-Z]/.test(race);
  const numberRequirement = !/\d/.test(race);
  return uppercaseRequirement && numberRequirement;
};
const isValidPetName = (petname: string): boolean => {
  const uppercaseRequirement = /[A-Z]/.test(petname);
  const numberRequirement = !/\d/.test(petname);
  return uppercaseRequirement && numberRequirement;
};
const isValidAddress = (address: string): boolean => {
  const lengthRequirement = address.length >= 8;
  const uppercaseRequirement = /[A-Z]/.test(address);
  const numberRequirement = /[0-9]/.test(address);
  return lengthRequirement && uppercaseRequirement && numberRequirement;
};
const isValidDetails = (details: string): boolean => {
  const lengthRequirement = details.length >= 8;
  const uppercaseRequirement = /[A-Z]/.test(details);
  const numberRequirement = !/\d/.test(details);
  return lengthRequirement && uppercaseRequirement && numberRequirement ;
};



export {
  isValidEmail,
  isValidPassword,
  isValidPetType,
  isValidRace,
  isValidPetName,
  isValidAddress,
  isValidDetails
}