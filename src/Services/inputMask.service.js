export const normalizeCpf = (event) => {
  const value = event.target.value;
  // Using a regular expression to format the input as a CPF number
  const formattedValue = value
    .replace(/\D/g, "") // remove non-numeric characters
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  return formattedValue;
};

export const normalizePhone = (event) => {
  const value = event.target.value;
  // Using a regular expression to format the input as a phone number
  const formattedValue = value
    .replace(/\D/g, "") // remove non-numeric characters
    .replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  return formattedValue;
};

export const normalizeCep = (event) => {
  const value = event.target.value;
  // Using a regular expression to format the input as a CEP
  const formattedValue = value
    .replace(/\D/g, "") // remove non-numeric characters
    .replace(/(\d{5})(\d{3})/, "$1-$2");
  return formattedValue;
};
