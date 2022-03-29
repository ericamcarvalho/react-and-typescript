// keyof
export type ObjectLiteralType = {
  first: 1;
  second: 2;
};

export type Result = keyof ObjectLiteralType; // Inferred Type: "first" | "second"

// Getting the type of a single key in an object
export type Obj = {
  0: "a";
  1: "b";
  prop0: "c";
  prop1: "d";
};

export type Result0 = Obj["prop0"]; // Inferred Type: "c"
export type Result1 = Obj[0 | 1]; // Inferred Type: "a" | "b"
export type Result2 = Obj["prop0" | "prop1"]; // Inferred Type: "c" | "d"

// Getting the values of an object
export type AnotherObj = {
  a: "A";
  b: "B";
  c: number;
};

export type Values = AnotherObj[keyof AnotherObj]; // Inferred Type: number | "A" | "B"

// Unions
export type A = "a" | "b" | "c";
export type B = "b" | "c" | "d";

export type Union = A | B; // Inferred Type: "a" | "b" | "c" | "d"

// Unions with objects
export type ObjectTypeA = {
  firstProp: number;
  sharedProp: string;
};

export type ObjectTypeB = {
  secondProp: boolean;
  sharedProp: string;
};

export type Union2 = ObjectTypeA | ObjectTypeB; // anything that is not shared between both

// Intersections
export type AnotherA = "a" | "b" | "c";
export type AnotherB = "b" | "c" | "d";

export type Intersection = AnotherA & AnotherB; // Inferred Type: "b" | "c"

// Conditionals
export type IsAssignableTo<A, B> = A extends B ? true : false;
export type IsAssignableToResult = IsAssignableTo<123, number>;

// Exclude
export type ExcludeResult = Exclude<1 | "a" | 2 | "b", number>;

// Extract
export type ExtractResult = Extract<1 | "a" | 2 | "b", 1 | "b" | "c">;

// Pick
export type ObjectLiteralType2 = {
  john: 1;
  paul: 2;
  george: 3;
  ringo: 4;
};

export type PickResult = Pick<ObjectLiteralType2, "george" | "ringo">; // Inferred Type: { george: 2; ringo: 4; }

// Omit
export type OmitResult = Omit<ObjectLiteralType2, "george" | "ringo">; // Inferred Type: { john: 1; paul: 2; }

// String manipulation
export type UppercaseWes = Uppercase<"web">;
export type LowercaseWes = Lowercase<"Web">;
export type CapitalizeWes = Capitalize<"web">;
export type UncapitalizeWes = Uncapitalize<"Web">;

// Props of specified HTML element (useful for extending HTML elements)
export const Input = (
  props: { about: string; accept: boolean } & React.HTMLProps<HTMLInputElement>
) => {
  // …
};

// <Input about={...} accept={...} value={...} ... />

// Props of a specified component
// export type MyComponentProps = React.ComponentProps<typeof MyComponent>;
