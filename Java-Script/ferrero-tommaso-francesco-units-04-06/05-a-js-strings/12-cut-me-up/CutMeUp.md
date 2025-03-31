# JavaScript String Methods: slice(), substring(), and substr()

A comparison of JavaScript's string extraction methods and their key differences.

## Method Syntax

| Method | Syntax | Parameters |
|--------|--------|------------|
| `slice()` | `string.slice(start, end)` | start, end (optional) |
| `substring()` | `string.substring(start, end)` | start, end (optional) |
| `substr()` | `string.substr(start, length)` | start, length (optional) |

## Key Differences

### slice(start, end)

- Negative indexes work! (e.g., -3 means "3rd character from the end")
- Maintains parameter order
- Returns "" (empty string) if start is beyond the string length

```javascript
const text = "JavaScript";
console.log(text.slice(4));      // "Script"
console.log(text.slice(0, 4));   // "Java"
console.log(text.slice(-6));     // "Script"
console.log(text.slice(4, -1));  // "Scrip"
```

### substring(start, end)

- Ignores negative values (treats them as 0)
- Swaps (start and end) parameters if start > end
- Returns empty string if start = end

```javascript
const text = "JavaScript";
console.log(text.substring(4));     // "Script"
console.log(text.substring(0, 4));  // "Java"
console.log(text.substring(-6));    // "JavaScript"
console.log(text.substring(5, 2));  // "vaS" (parameters swapped)
```

### substr(start, length) - Deprecated

- Start parameter can be negative (counts from end)
- Second parameter is length, not position!!
- Returns empty string if length is negative
- Avoid using—modern JS prefers slice()!

```javascript
const text = "JavaScript";
console.log(text.substr(4));     // "Script"
console.log(text.substr(0, 4));  // "Java"
console.log(text.substr(-6));    // "Script"
console.log(text.substr(4, 2));  // "Sc" (2 characters)
```

## Compatibility

All three methods are widely supported, but `substr()` is officially deprecated, slice() → Best for most cases (cleaner, supports negatives), substring() → Okay, but a little bit quirky with parameter swapping.

## For my future usage of them

- Need flexibility with negatives? → slice()
- Need automatic parameter swapping? → substring() (but why?)
- Writing new code? → Just use slice()!
- Never use `substr()`!
