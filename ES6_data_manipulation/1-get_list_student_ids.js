/**
 * Tələbə obyektləri massivindən yalnız ID-ləri çıxaran funksiya.
 * @param {Array} listStudents - Tələbə obyektlərindən ibarət massiv.
 * @returns {Array} ID-lərdən ibarət massiv və ya boş massiv.
 */
export default function getListStudentIds(listStudents) {
  // Arqumentin massiv olub-olmadığını yoxlayırıq
  if (!Array.isArray(listStudents)) {
    return [];
  }

  // map funksiyası vasitəsilə hər bir obyektin id-sini götürürük
  return listStudents.map((student) => student.id);
}
