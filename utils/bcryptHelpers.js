import bcrypt from 'bcrypt';

export const hashPassword = async (pass) => {
  const saltRounds = 10;
  return await bcrypt.hash(pass, saltRounds);
};

export const comparePass = async (pass, hashedPass) => {
  return await bcrypt.compare(pass, hashedPass);
};
