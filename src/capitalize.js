const capitalize = (string) => {
  if (typeof (string) !== 'string') {
    throw new Error('Not a string!');
  }

  if (string === '') {
    return 'Empty string given.';
  }
  const newCharOne = string.charAt(0).toUpperCase();

  string = string.replace(string.charAt(0), newCharOne);
  return string;
};

module.exports = capitalize;