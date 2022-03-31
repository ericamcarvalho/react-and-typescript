type NameTagProps = {
  name: string;
};

const NameTag = ({ name }: NameTagProps) => {
  return (
    <main>
      <h1>My Name Is</h1>
      <p>{name}</p>
    </main>
  );
};

export default NameTag;
