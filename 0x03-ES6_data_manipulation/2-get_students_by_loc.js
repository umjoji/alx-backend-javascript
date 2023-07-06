export default function getStudentsByLocation(students, location) {
  const locationStudents = students.filter((student) => student.location === location);
  return locationStudents;
}
