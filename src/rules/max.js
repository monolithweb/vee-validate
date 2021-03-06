const validate = (value, [length]) => {
  if (value === undefined || value === null) {
    return length >= 0;
  }

  return String(value).length <= length;
};

export {
  validate
};

export default {
  validate
};
