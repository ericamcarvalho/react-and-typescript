type CharacterType = {
  name: string;
  alignment: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  total: number;
};

/**
<Table>
  <TableRow heading="Alignment" value={character.alignment} />
  <TableRow heading="Intelligence" value={character.intelligence} />
  <TableRow heading="Strength" value={character.strength} />
  ...
</Table>
 */

// We have a table, each row is a property of a character (capitalised)
export type TableProps = { children: React.ReactNode };

// Wrong way:
export type BadTableRowProps = {
  heading: string;
  value: string | number;
};

// We want to enforce heading to be a property which is actually on a character
// Still not great - we're hardcoding it and the character properties could change
export type NotGreatTableRowProps = {
  heading:
    | "Name"
    | "Alignment"
    | "Intelligence"
    | "Strength"
    | "Speed"
    | "Durability"
    | "Power"
    | "Combat"
    | "Total";
  value: string | number;
};

// We can  determine the keys eligble to be a row heading dynamically based off of CharacterType
// There are still issues - we need to capitalise the heading
export type BetterButWrongTableRowProps = {
  heading: keyof CharacterType;
  value: string | number;
};

// A little closer
export type ALittleBetterTableRowProps = {
  heading: Capitalize<keyof CharacterType>;
  value: string | number;
};

// We can also dynamically set the value to be the value accepted for that property
export type TableRowProps = {
  heading: Capitalize<keyof CharacterType>;
  value: CharacterType[keyof CharacterType];
};
