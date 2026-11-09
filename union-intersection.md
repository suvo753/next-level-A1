# Combining Union and Intersection Types in TypeScript

## Introduction

Union and Intersection are two useful features of TypeScript. Union (|) allows a value to have different types. Intersection (&) combines multiple types into one.

## Union Type (|)

Union means a value can be one of several types.

typescript
type Status = "active" | "inactive";

let userStatus: Status = "active";


Here, the userStatus can be either active or inactive.

## Intersection Type (&)

Intersection combines two or more types into one type.

typescript
type User = {
  name: string;
};

type Admin = {
  role: string;
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Shuvo",
  role: "Admin"
};


Here, AdminUser needs both name and role properties.

 Combining Union and Intersection

We can use both together to create flexible types.

typescript
type Person = {
  name: string;
};

type Role = {
  role: "Admin" | "User";
};

type Account = Person & Role;


Now, Account must have a name and a role that can be either Admin or User.

## Conclusion

Union and Intersection make TypeScript types more flexible and useful. We can use them together to create better and organized code.