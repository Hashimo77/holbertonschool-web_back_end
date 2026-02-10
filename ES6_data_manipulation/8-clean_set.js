/**
 * Set daxilində müəyyən string ilə başlayan dəyərləri təmizləyir və birləşdirir.
 * @param {Set} set - Elementlər toplusu.
 * @param {String} startString - Başlanğıc string.
 * @returns {String} Təmizlənmiş və birləşdirilmiş string.
 */
export default function cleanSet(set, startString) {
  // Arqumentlərin düzgünlüyünü və startString-in boş olmadığını yoxlayırıq
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const parts = [];

  // Set daxilindəki hər bir elementi yoxlayırıq
  for (const value of set) {
    // Əgər element string-dirsə və startString ilə başlayırsa
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Başlanğıc hissəni kəsib qalanını massivə əlavə edirik
      parts.push(value.slice(startString.length));
    }
  }

  // Massivdəki hissələri "-" ilə birləşdiririk
  return parts.join('-');
}
