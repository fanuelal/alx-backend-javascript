export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString.length) return res;
  set.forEach((i) => {
    if (i && i.startsWith(startString)) res += `${i.slice(startString.length)}-`;
  });
  return res.slice(0, res.length - 1);
}
