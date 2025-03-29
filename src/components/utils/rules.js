const validateEmail = (value) => {
  if (!value) {
    return 'This field is required';
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return 'This field must be a valid email';
  }
  return true;
};
const validateValue = (value) => {
  if (!value) {
    return 'This field is required';
  }
  return true;
};
const validateDescription = (value) => {
  if (!value) {
    return 'This field is required';
  }
  const str = value;
  if (str.length < 50) {
    return 'This field minimum allowed is 50 symbols';
  }
  return true;
};
const validatePhoneNumber = (value) => {
  if (!value) {
    return 'This field is required';
  }
  const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  if (!regex.test(value)) {
    return 'This field must be a valid phone';
  }
  return true;
};
const validateUrl = (value) => {
  if (!value) {
    return 'This field is required';
  }
  // eslint-disable-next-line max-len, no-useless-escape
  const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  if (!regex.test(value)) {
    return 'This field must be a valid URL';
  }
  return true;
};

export {
  validateEmail,
  validateUrl,
  validateValue,
  validateDescription,
  validatePhoneNumber,
};
