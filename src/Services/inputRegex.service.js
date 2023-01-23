export const validateEmail = (email) => {
  // Regular expression for email validation
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (pattern.test(email)) {
    return true;
  } else {
    return false;
  }
};
