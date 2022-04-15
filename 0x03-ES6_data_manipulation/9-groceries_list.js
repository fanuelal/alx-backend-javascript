export default function groceriesList() {
  const list = [['Apples', 10], ['Tomatoes', 10], ['Pasta', 1], ['Rice', 1], ['Banana', 5]];
  const grocerySet = new Map();
  for (const i of list) grocerySet.set(i[0], i[1]);
  return grocerySet;
}
