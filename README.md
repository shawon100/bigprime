# bigprime
bigprime is a node js module that can generate big prime numbers fast . 

# Install

```
npm install bigprime

```

# How To Use

At first create a instance of bigprime . Then Just pass lower limit and upper limit . It will generate prime numbers between lower limit And upper limit.

```
var prime=require('bigprime');

prime.primeGenerate(1,100);

```

# Implementation

Segmented Sieve Algorithm is used to generate big prime numbers very fast than other algorithms .
