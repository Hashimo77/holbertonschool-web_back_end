/**
 * Map daxilində miqdarı 1 olan bütün məhsulları 100 ilə əvəzləyir.
 * @param {Map} items - Yenilənəcək Map obyekti.
 * @returns {Map} Yenilənmiş Map.
 * @throws {Error} Arqument Map deyilse "Cannot process" xətası qaytarır.
 */
export default function updateUniqueItems(items) {
  // Arqumentin Map olub-olmadığını yoxlayırıq
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }

  // for...of dövrü ilə Map-in hər bir entry-sinə (açar, dəyər) baxırıq
  for (const [key, value] of items) {
    if (value === 1) {
      // Əgər miqdar 1-dirsə, onu 100-ə yeniləyirik
      items.set(key, 100);
    }
  }

  return items;
}
