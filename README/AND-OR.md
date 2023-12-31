# AND & OR

```
A & 0 = 0
A & (-1) = A
A & (~A) = 0

A | 0 = A
A | (~A) = -1
```

## Idempotent Property
```
A & A = A
A | A = A
```

## Commutativity

```
A & B = B & A
A | B = B | A
```

## Associativity

```
(A & B) & C = A & (B & C)
(A | B) | C = A | (B | C)
```

## Distributive Property

```
(A & B) | C = (A | C) & (B | C)
(A | B) & C = (A & C) | (B & C)
```

## De Morgan's Law

```
~(A & B) = (~A) | (~B)
~(A | B) = (~A) & (~B)
```

## Absorption

```
x | (x & y) = x
x & (x | y) = x

// Proof: https://www.nayuki.io/page/boolean-algebra-laws
```

## A & (A - 1)
The result is: to change the last 1 of the binary representation of A to 0.

## Diff
```
x | (~(x) & y) = x | y
x & (~(x) | y) = x & y
(x & y) | (x & ~(y)) = x
(x | y) & (x | ~(y)) = x
(x & y) | (~(x) & z) | (y & z) = (x & y) | (~(x) & z)
(x | y) & (~(x) | z) & (y | z) = (x | y) & (~(x) | z)

// Proof: https://www.nayuki.io/page/boolean-algebra-laws
```

