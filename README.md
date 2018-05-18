# Word Pattern Algo Prompt

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

#### Example 1:
  Input: pattern = "abba", str = "dog cat cat dog"
  Output: true
#### Example 2:
  Input:pattern = "abba", str = "dog cat cat fish"
  Output: false
#### Example 3:
  Input: pattern = "aaaa", str = "dog cat cat dog"
  Output: false
#### Example 4:
  Input: pattern = "abba", str = "dog dog dog dog"
  Output: false
### Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

## Discussion
I had trouble finding a way to compare the pattern and the string. I went with the flow and it passed. I still dont understand fully if it passes every test case.

I split the two strings into arrays to compare. Then I assigned every letter to a word in an object by the same index value (Not sure how this worked and didnt mix some words with other letters).  Then I compared if the word in the string matches with the object I made. If the word matched I would change the array to fit the key of the object. This makes the new array to be compared with the pattern. If the pattern is same as the new array, then I returned true.

## Personal Notes
For some reason it was adding an extra object index if the string had one letter. Test case: pattern = "abc" str = "b c a".
I don't know the reason for this. To compensate for this, I made all the letters in the string uppercase and it passed. 
