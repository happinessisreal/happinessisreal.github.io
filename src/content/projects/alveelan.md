---
name: alveelan
repo: alveelan
summary: A programming language for Bangla-speaking kids. Bangla keywords, digits and error messages, compiled to native code through LLVM.
tags: [rust, llvm, compilers]
order: 1
year: 2026
shots:
  - { src: /projects/alveelan/demo.jpg, alt: "A Fibonacci program written in Bangla, compiled and run, printing its output in Bangla digits" }
  - { src: /projects/alveelan/errors.jpg, alt: "Compiler errors in Bangla for a type mismatch, an undefined variable and a syntax error" }
---

## What it is

Most children in Bangladesh meet programming through English keywords. In alveelan the whole language is Bangla: `ধরি` declares a variable, `যদি` / `নাহলে` branch, `যতক্ষণ` loops and `দেখাও` prints. Numbers can be written with ০–৯, and programs answer in ০–৯ too.

## How it works

The compiler is written in Rust and goes from source to a native executable:

1. **Lexer**: Bangla keywords, Unicode identifiers, and Bangla digits normalised to ASCII.
2. **Parser**: recursive descent with precedence climbing.
3. **Semantic analysis**: scopes, types and function signatures, with errors written in Bangla.
4. **Code generation**: LLVM IR through inkwell, then an object file linked with a tiny C runtime that prints numbers in Bangla digits.

## Highlights

- Every example program is compiled and run in CI, and its output is checked against expected files.
- Errors name the variable or type in Bangla and give the line number in Bangla digits.
- Builds against LLVM 18–21 through Cargo features.
