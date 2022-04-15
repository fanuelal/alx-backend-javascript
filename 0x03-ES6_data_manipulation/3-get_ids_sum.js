export default function getStudentIdsSum(list) {
  return list.reduce((accum, i) => accum + i.id, 0);
}
