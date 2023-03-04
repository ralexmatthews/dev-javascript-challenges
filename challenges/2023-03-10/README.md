# Container With Most Water

You are given an array of numbers. Each number in the array represents a height of a wall, in units. Find the two walls, that if water is filled between them, would give the highest volume. This volume is the answer.

- Each wall is 1 unit apart
- Each wall is measured in units
- The volume is the height \* width

## Example

Given an array

```js
const walls = [1, 8, 6, 2, 5, 4, 8, 3, 7];
```

The highest volume can be achieved if you select the `walls[1] -> 8` and `walls[8] -> 7`, to give a width of `7`, and a max height of `7`.

![Example](./example.jpg)

Multiplied together, this gives you your answer of `49`.
