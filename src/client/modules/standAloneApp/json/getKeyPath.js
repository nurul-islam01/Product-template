const seprator = '.';

function removeStr(str, keyToFind) {
  const strArr = str.split(seprator);
  let strArrLength = strArr.length;
  do {
    strArr.pop();
    strArrLength -= 1;
  } while (strArr[strArrLength - 1] !== keyToFind);
  return strArr.join(seprator);
}
const flatObject = {};
let paths = [];
const flattenObject = (obj, keyName = '', isArray = false) => {
  if (obj)
    Object.keys(obj).forEach((key) => {
      let newKey;
      if (isArray) {
        if (keyName === '') newKey = key;
        else newKey = `${keyName}[${key}]`;
      } else if (keyName === '') newKey = key;
      else newKey = `${keyName}${seprator}${key}`;
      if (Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, true);
      } else if (typeof obj[key] === 'object') {
        flattenObject(obj[key], newKey);
      } else {
        paths.push(newKey);
        flatObject[newKey] = obj[key];
      }
    });
};

const getKeyPath = (root, keyToFind) => {
  const orig = new Set();
  flattenObject(root);
  paths = paths.filter((path) => path.split(seprator).includes(keyToFind));

  paths.map((path) => {
    if (path.split(seprator)[path.split(seprator).length - 1] === keyToFind) {
      orig.add(path);
    } else {
      orig.add(removeStr(path, keyToFind));
    }
    return path;
  });
  paths = [];
  return [...orig];
};

export default getKeyPath;
