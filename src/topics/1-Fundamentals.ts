export type CounterProps = {
  incident: string;
  count: number;
  enabled: boolean;
};

export type ItemListProps = {
  items: string[];
  status: "loading" | "error" | "success";
};

export type Item = {
  id: string;
  title: string;
  anObject: object; // Useful as a placeholder.
  anotherObject: {}; // Can have any properties and values.
};

export type ItemList = {
  item: Item;
  items: Item[];
};

// What if we wanted a situation where the key can be any string and the value has to be of a certain type?
export type ItemHash = {
  [key: string]: Item;
};

// Which is the same as:
export type ItemHash2 = Record<string, Item>;

// Functions
export type MyFunctions = {
  onHover: () => void;
  onChange: (id: number) => void;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

// If not every prop is required
export type OptionalProps = {
  requiredProp: boolean;
  optionalProp?: string;
};

// Generics
export type Link<T> = {
  value: T;
  next?: Link<T>;
};

// We can't just make a new object with that type
export const wrong: Link = { value: "hello" };

// Instead:
export const firstLink: Link<string> = { value: "hello" };
