const reverseString = (string) => {
  string = string.split('');
  
  string.reverse();
      
  string = string.join('');

  return string;
};

module.exports = reverseString;