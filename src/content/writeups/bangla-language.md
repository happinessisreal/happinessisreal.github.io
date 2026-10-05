---
title: Writing a programming language in Bangla
date: 2026-10-04
summary: How alveelan reads two digit systems, answers in Bangla digits, explains its errors in Bangla, and the code-generation bug hiding in nested loops.
tags: [compilers, rust, llvm, bangla]
stage: budding
project: alveelan
---

[alveelan](/projects/alveelan) is a small programming language where every keyword is Bangla. This is a tour of the parts that turned out to be interesting.

```
ফাংশন শুরু() {
    ধরি ঘর: সংখ্যা = ১
    যতক্ষণ (ঘর <= ১০) {
        দেখাও(৫ * ঘর)
        ঘর = ঘর + ১
    }
}
```

That's the 5 times table: `ধরি` declares, `যতক্ষণ` loops and `দেখাও` prints.

## Two digit systems

Kids write `১০` and adults sometimes write `10`, so the lexer accepts both and normalises Bangla digits (U+09E6–U+09EF) to ASCII as it reads a number. Everything after the lexer only ever sees one digit system.

## Answering in Bangla

The first version printed numbers with C's `printf`, so a Bangla program answered `30`. Now the compiler links a tiny C runtime with every program, and `দেখাও` calls it for numbers. It formats the number, then swaps each digit for its Bangla glyph. The program says ৩০.

## Errors a child can read

Error messages are Bangla too, and they name things the way the language does:

```
ত্রুটি: 'বয়স' চলকটির ধরন হল সংখ্যা, কিন্তু আপনি একে লেখা করার চেষ্টা করছেন।
ত্রুটি [লাইন ২]: ')' প্রত্যাশিত ছিল, কিন্তু '{' পাওয়া গেছে।
```

The types print as `সংখ্যা` and `লেখা` rather than the compiler's internal names, and the line number is in Bangla digits.

## The bug in nested loops

An `if` without `else`, inside a `while`, produced invalid LLVM IR: *"Basic Block does not have terminator"*. The code generator checked whether the block it **started** in already ended with a branch:

```rust
if then_bb.get_terminator().is_none() { /* branch to merge */ }
```

But nested control flow moves the builder into new blocks, so the block that needs the branch is the **current** one:

```rust
fn current_block_open(&self) -> bool {
    self.builder.get_insert_block().is_some_and(|bb| bb.get_terminator().is_none())
}
```

Every example program is now compiled and run in CI, with its output checked, so this kind of bug can't come back quietly.

## Next

Reading input (`নাও` is already a reserved word), joining text with `+`, and a browser playground for classrooms.
