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

export {
  isValidEmail,
  isValidPassword,
}