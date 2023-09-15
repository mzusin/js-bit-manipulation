# XOR  (Exclusive OR)

## Self-inverse property

```
x ^ x = 0
x ^ 0 = x
x ^ (~x) = -1
```

## Commutativity

```
x ^ y = y ^ x
```

## Associativity

```
(a ^ b) ^ c = a ^ (b ^ c)
```

## Distributive Property

```
(A ^ B) & C = (A & C) ^ (B & C)
A ^ (B + C) = (A ^ B) + (A ^ C)
...
```

## XOR Equation
Equation like `a = b ^ x` or `a = x ^ b` can be solved like: `x = a ^ b`

## Alternative XOR Implementations

```
x ^ y = (x & y) | (x & y)
x ^ y = (x | y) & (x | y)
x ^ y = (x | y) & (x & y)
x ^ y = (x | y) - (x & y);
x ^ y = (x | y) & (~x | ~y);
x ^ y = (x & (~x)) | ((~x) & x);
x ^ y = (x + y - (2 * (x & y)));
```

