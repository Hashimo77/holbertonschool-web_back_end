/**
 * Tələbələri yerləşdikləri şəhərə görə filtrləyən funksiya.
 * @param {Array} students - Tələbə obyektlərindən ibarət massiv.
 * @param {String} city - Filtrləmək istədiyiniz şəhər adı.
 * @returns {Array} Şərtə uyğun gələn tələbələrin massivi.
 */
export default function getStudentsByLocation(students, city) {
  // Array.isArray yoxlanışı mütləq deyil, amma təhlükəsizlik üçün yaxşı təcrübədir
  if (!Array.isArray(students)) {
    return [];
  }

  // filter metodu ilə yalnız location xüsusiyyəti city-yə bərabər olanları seçirik
  return students.filter((student) => student.location === city);
}
