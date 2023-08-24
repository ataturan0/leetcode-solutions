/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // Create a frequency map of characters in the magazine.
  const mapMagazine = new Map();

  // Create a frequency map of characters in the magazine by counting occurrences.
  for (let i = 0; i < magazine.length; i++) {
    if (mapMagazine.has(magazine.charAt(i))) {
      mapMagazine.set(
        magazine.charAt(i),
        mapMagazine.get(magazine.charAt(i)) + 1
      );
    } else {
      mapMagazine.set(magazine.charAt(i), 1);
    }
  }
  //console.log(mapMagazine);

  // Iterate through the ransomNote characters and check if they can be constructed.
  for (let i = 0; i < ransomNote.length; i++) {
    let currentCount = mapMagazine.get(ransomNote.charAt(i));

    // If the character exists in the map and has a frequency greater than 0, decrement its count.
    if (currentCount) {
      mapMagazine.set(ransomNote.charAt(i), currentCount - 1);
    } else {
      // If the character is not found or its frequency is 0, the ransomNote can't be constructed.
      return false;
    }
  }
  //console.log(mapMagazine);
  return true; // All characters of ransomNote can be constructed.
};

// Time Complexity: O(m), where m is the length of the magazine.
// Space Complexity: O(1) since only lowercase letters are expected in the problem (maximum 26).
console.log(canConstruct("asdasd", "asdfgasdfg"));
