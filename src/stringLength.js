const stringLength = (string) => {
  string = string.replace(/\s/g, ''); // remove whitespaces

  if (string.length === 0 || string.length > 9){
    throw new Error('String doesn\'t have any characters or has more than 9 characters');
    return;
  } 

  return string.length;
};

module.exports = stringLength;