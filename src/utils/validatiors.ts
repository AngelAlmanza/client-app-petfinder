const isValidEmail = (email: string): boolean => {
  const cleanEmail = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(cleanEmail);
};

const isValidPassword = (password: string): boolean => {
  const cleanPassword = password.trim();
  const lengthRequirement = cleanPassword.length >= 8;
  const uppercaseRequirement = /[A-Z]/.test(cleanPassword);
  const numberRequirement = /[0-9]/.test(cleanPassword);
  return lengthRequirement && uppercaseRequirement && numberRequirement;
};

const isValidPetType = (animaltype: string): boolean => animaltype.trim().length > 0;

const isValidRace = (race: string): boolean => race.trim().length > 3;

const isValidPetName = (petname: string): boolean => petname.trim().length > 3;

const isValidAddress = (address: string): boolean => address.trim().length > 8;

const isValidDetails = (details: string): boolean => details.trim().length > 20;

export {
  isValidEmail,
  isValidPassword,
  isValidPetType,
  isValidRace,
  isValidPetName,
  isValidAddress,
  isValidDetails
}