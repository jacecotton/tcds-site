/**
 * Generates a slug from a given string. Makes it usable as an ident, class, URL
 * path, file name, etc.
 *
 * Takes a string, trims white space, removes diacritics from the base letter,
 * lowercases all letters, and replaces all spaces with a separator (a hyphen
 * unless otherwise specified).
 *
 * Note that this does not generate unique IDs.
 * 
 * @param {string} [separator="-"] A character to insert between words (i.e.
 * replace spaces) within the slug.
 *
 * @returns {string} A slug.
 */

 String.prototype.slugify = function(separator = "-") {
  return this
    // Trim leading and trailing white space.
    .trim()
    // Remove diacritics from base letter.
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    // Convert to lowercase.
    .toLowerCase()
    // Replace remaining non-alphanumeric characters with space.
    .replace(/[^\w\s]/gi, " ")
    // Replace multiple spaces with single space.
    .replace(/\s\s+/g, " ")
    // Replace white space with separator.
    .replace(/\s+/g, separator);
}