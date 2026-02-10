/**
 * Müəyyən uzunluqda ArrayBuffer yaradır və spesifik mövqeyə Int8 dəyəri yazır.
 * @param {Number} length - Buffer-in ümumi ölçüsü.
 * @param {Number} position - Dəyərin yazılacağı indeks.
 * @param {Number} value - Yazılacaq Int8 dəyəri.
 * @returns {DataView} Yaradılmış buffer-in görüntüsü (DataView).
 * @throws {Error} Mövqe diapazondan kənarda olduqda xəta qaytarır.
 */
export default function createInt8TypedArray(length, position, value) {
  // 1. Müəyyən bayt ölçüsündə yaddaş sahəsi (ArrayBuffer) ayırırıq
  const buffer = new ArrayBuffer(length);
  
  // 2. Bu yaddaş üzərində əməliyyat aparmaq üçün DataView yaradırıq
  const view = new DataView(buffer);

  // 3. Mövqeyin (position) mövcud olub-olmadığını yoxlayırıq
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // 4. Int8 (8-bit signed integer) dəyərini göstərilən mövqeyə yazırıq
  view.setInt8(position, value);

  // 5. Şərtdə tələb olunduğu kimi DataView obyektini qaytarırıq
  return view;
}
