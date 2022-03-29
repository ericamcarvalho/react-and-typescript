import { useState, useEffect } from "react";
import {
  CharacterInformation,
  CharacterType,
  fetchCharacter,
} from "./CharacterInformation";

export const Application = () => {
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacter().then((c) => {
      setCharacter(c);
      setLoading(false);
    });
  }, []);

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CharacterInformation character={character} />
      )}
    </main>
  );
};
