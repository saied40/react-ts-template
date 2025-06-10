/**
 * Sets the value of the specified key in localStorage.
 *
 * @param key the key to set
 * @param value the value to set
 */
export function setItem(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting local storage item:', error);
  }
};

/**
 * Retrieves the value associated with the specified key from localStorage.
 * Parses the stored JSON string back into the original value.
 *
 * @param key the key to retrieve
 * @returns the parsed value if the key exists, or null if it doesn't exist or an error occurs
 */

export function getItem(key: string) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error getting local storage item:', error);
    return null;
  }
};

/**
 * Removes the item associated with the specified key from localStorage.
 *
 * @param key the key of the item to remove
 */
/*export function removeItem(key: string) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing local storage item:', error);
  }
};*/
