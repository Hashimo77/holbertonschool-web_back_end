/**
 * Müəyyən şəhərdəki tələbələrin qiymətlərini yeniləyən funksiya.
 * @param {Array} students - Tələbə massivi.
 * @param {String} city - Şəhər adı.
 * @param {Array} newGrades - Yeni qiymət obyektlərinin massivi.
 * @returns {Array} Qiyməti yenilənmiş tələbələrin massivi.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // 1. Şəhərə görə filtrləyirik
  return students
    .filter((student) => student.location === city)
    // 2. Hər bir tələbə üçün qiyməti tapıb əlavə edirik
    .map((student) => {
      // newGrades içində bu tələbənin ID-sinə uyğun qiyməti axtarırıq
      const gradeObj = newGrades.filter((g) => g.studentId === student.id)[0];

      return {
        ...student,
        // Əgər qiymət tapılsa onu yazırıq, tapılmasa 'N/A'
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
