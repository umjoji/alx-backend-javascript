export default function updateStudentGradeByCity(students, location, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  /*
    Filter students by location
    Change/add grade for students in newGrades
    Use N/A if student has no grade
    */
  const cityStudentsGrades = students.filter((student) => student.location === location).map(
    (student) => {
      const studentGrades = newGrades.find((grade) => student.id === grade.studentId);
      // return N/A if student has no grade (ternary operator)
      return { ...student, grade: studentGrades ? studentGrades.grade : 'N/A' };
    },
  );
  return cityStudentsGrades;
}
