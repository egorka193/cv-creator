const formatDate = (value) => {
  if (!value) {
    return '';
  }
  const year = value.getFullYear();
  const month = value.getMonth();
  const day = value.getDate();

  return `${year}-${month}-${day}`;
};

export default formatDate;
