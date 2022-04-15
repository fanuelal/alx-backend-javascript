export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.filter((i) => i.location === city)
    .map((student) => {
      const gradeI = newGrades
        .filter((i) => i.studentId === student.id)
        .map((x) => x.grade)[0];
      const grade = gradeI || 'N/A';
      return { ...student, grade };
    });
}
