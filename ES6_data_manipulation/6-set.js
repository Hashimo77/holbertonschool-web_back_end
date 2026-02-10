/**
 * Massivdən Set yaradan funksiya.
 * @param {Array} array - Hər hansı tipdə elementləri olan massiv.
 * @returns {Set} Unikal elementlərdən ibarət Set.
 */
export default function setFromArray(array) {
  // Set konstruktoru arqument olaraq iterable (məsələn massiv) qəbul edir
  // və avtomatik olaraq təkrar olunan elementləri silir.
  return new Set(array);
}
