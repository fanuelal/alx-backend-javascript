export default function getListStudentIds(list) {
  if (!Array.isArray(list)) return [];
  return list.map((i) => i.id);
}
