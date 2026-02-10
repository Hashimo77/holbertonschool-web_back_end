/**
 * Ərzaq siyahısını Map strukturunda qaytaran funksiya.
 * @returns {Map} Ərzaq adları və miqdarlarından ibarət Map.
 */
export default function groceriesList() {
  // Yeni bir Map yaradırıq
  const groceries = new Map();

  // set() metodu ilə hər bir elementi siyahıya əlavə edirik
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}
