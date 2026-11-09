# Type Alias vs Interface in TypeScript

## Introduction

Type Alias and Interface are used to create custom types in TypeScript. Both help us write clean and organized code.

## Main Difference

An Interface is mainly used to define the structure of an object.

typescript
interface User {

  name: string;

  age: number;

  
}


A Type Alias can define objects, strings, numbers, and other types.

typescript


type Status = "active" | "inactive";


Interface supports declaration merging, but Type Alias does not.

We can also use extends  with Interface and  & with Type Alias to combine types.

## When to Use

Use Interface for object structures. Use Type Alias for union types and other custom types.

## Conclusion

Both are useful in TypeScript. They help us write better and more organized code. We can choose either one based on our needs.