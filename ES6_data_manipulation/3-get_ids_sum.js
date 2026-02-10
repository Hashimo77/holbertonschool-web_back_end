/**
 * Bütün tələbə ID-lərinin cəmini hesablayan funksiya.
 * @param {Array} students - Tələbə obyektlərindən ibarət massiv.
 * @returns {Number} ID-lərin cəmi.
 */
export default function getStudentIdsSum(students) {
  // reduce metodu: accumulator (cəm) və current value (cari tələbə) qəbul edir
  return students.reduce((sum, student) => sum + student.id, 0);
}
