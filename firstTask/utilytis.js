
 export const asignarId =()=> Math.random().toString(36).substr(2, 9);

 export const addEmptyChars = (str, addSpace) => {
  if (str.length >= addSpace) {
    return str;
  }
  const countLong = addSpace - str.length;
  const completeSpace = num => " ".repeat(num);
  return str + completeSpace(countLong);
};
