export const capitalizeFirstLetter = (string) => {
  //   const firstLetter = string.slice(0, 1).toUpperCase();
  if (string.length <= 2) return string.toUpperCase();

  const arr = Array.from(string);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-") {
      arr[i + 1] = arr[i + 1].toUpperCase();
    }
    if (i === 0) {
      arr[i] = arr[i].toUpperCase();
    }
  }

  return arr.join("");
};
