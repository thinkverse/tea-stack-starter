module.exports = (value, ...values) => {
  return values.join(" ").concat(" ").concat(value);
};
