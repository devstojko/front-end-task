export default function formatTitle (str)  {
  // [..] defines a character class
  // g means global research
  const regEx = /[_-]/g; 
  if (str.includes('_')) {
    str = str.replace(regEx, ' ')
  }
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}