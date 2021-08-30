# Closest Match
This module finds the closest string match or matches in an array using [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance)

# Installation

```
npm i closest-match
```

# Usage

```js
const closest-match = require("closest-match");

closest-match.distance(text1, text2) // Difference between text1 and text2
// (Number of changes need to get from text1 to text2)

closest-match.closestMatch(text, array) // Closest match of text in an array

closest-match.closestMatch(text, array, true) // An array of all elements in an array that are closest to the text
```

# Methods

| Method | Explanation |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| distance(text1, text2) | Returns the Levenshtein difference between the strings |
| closestMatch(text, array, showOccurrences) | Returns the closest match of a specified string in an array. If showOccurrences is true, then it returns an array of all of  the closest matches to the string in an array. |

# Examples

```js
const { distance, closestMatch } = require("closest-match");

console.log(distance("hello world", "hello")); // 6

console.log(closestMatch("dag", ["dog", "pumpkin"])); //dog

console.log(closestMatch("hello", ["jello", "yellow", "bello"], true)); // ["jello", "bello"]
```