export default function getStudentsByLocation(list, city) {
  return list.filter((i) => i.location === city);
}
