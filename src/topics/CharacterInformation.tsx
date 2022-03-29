import { Table, TableRow } from "./Table";

export type CharacterType = {
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

export const CharacterInformation = ({
  character,
}: {
  character: CharacterType;
}) => {
  return (
    <article>
      <header>
        <h1>{character.name}</h1>
      </header>
      <Table>
        <TableRow heading="Alignment" value={character.alignment} />
        <TableRow heading="Intelligence" value={character.intelligence} />
        <TableRow heading="Strength" value={character.strength} />
        <TableRow heading="Speed" value={character.speed} />
        <TableRow heading="Durability" value={character.durability} />
        <TableRow heading="Power" value={character.power} />
        <TableRow heading="Combat" value={character.combat} />
        <TableRow heading="Total" value={character.total} />
      </Table>
    </article>
  );
};

export const fetchCharacter = (): Promise<CharacterType> => {
  const character = {
    name: "Riddler",
    alignment: "bad",
    intelligence: 100,
    strength: 10,
    speed: 12,
    durability: 14,
    power: 10,
    combat: 14,
    total: 160,
  };

  return Promise.resolve(character);
};
