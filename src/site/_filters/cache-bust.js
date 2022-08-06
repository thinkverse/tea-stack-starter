module.exports = (file) => {
  return String(file).concat(`?v=${Date.now()}`);
};
