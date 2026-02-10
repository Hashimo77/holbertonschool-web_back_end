/**
 * Massivdəki bütün elementlərin Set daxilində olub-olmadığını yoxlayır.
 * @param {Set} set - Yoxlanılacaq ana kolleksiya.
 * @param {Array} array - Axtarılan elementlərin massivi.
 * @returns {Boolean} Bütün elementlər varsa true, yoxdursa false.
 */
export default function hasValuesFromArray(set, array) {
  // every metodu bütün elementlər şərti ödəyəndə true qaytarır
  return array.every((element) => set.has(element));
}
