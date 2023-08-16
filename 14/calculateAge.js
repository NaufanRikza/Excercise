const calculateAge = (born = "") => {
  bornDate = new Date(born);
  now = new Date();

  if (now - bornDate < 0) {
    return "invalid date time, are tou from future??";
  }

  const result = (now - bornDate) / (3600 * 1000 * 24 * 365);
  return `you are ${result.toFixed()} years old`;
};

console.log(calculateAge("1999-6-9"));
console.log(calculateAge("2002-6-9"));
console.log(calculateAge("2025-6-9"));
