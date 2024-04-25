# Acronym Ease

Acronym Ease is a lightweight package designed to simplify text abbreviation and formatting tasks. It provides convenient methods for handling text, names, and other strings that require regular abbreviation or formatting.

## Installation

To install Acronym Ease, you can use npm:

```bash
npm install acronymease
```

This package is perfect for scenarios where you need to abbreviate or format text efficiently and consistently. Whether you're working with names, titles, or any other type of text, Acronym Ease can help streamline your workflow.

## Dependency Methods

This package provides several utility methods for string manipulation.

### Methods

### capitalise

This method capitalizes the input string.

```typescript
import { capitalise } from "acronymease";

const input = "hello world";
const capitalized = capitalise(input);
console.log(capitalized); // Output: "HELLO WORLD"
```

### abbreviate

This method abbreviates the input string by capitalizing the first letter of each word and leaving specified number of words unabbreviated.

```typescript
import { abbreviate } from "acronymease";

const input = "hello world of programming";
const abbreviated = abbreviate(input, 2);
console.log(abbreviated); // Output: "Hello W. Of Programming"
```

### addEllipsis

This method adds an ellipsis (...) to the end of the input string if it exceeds a specified maximum length.

```typescript
import { addEllipsis } from "acronymease";

const input = "This is a long sentence that needs to be shortened.";
const shortened = addEllipsis(input, 20);
console.log(shortened); // Output: "This is a long sen..."
```

### toTitleCase

This method converts the input string to title case format.

```typescript
import { toTitleCase } from "acronymease";

const input = "hello world";
const titleCase = toTitleCase(input);
console.log(titleCase); // Output: "Hello World"
```

Feel free to use these methods in your project and customize them according to your needs!
