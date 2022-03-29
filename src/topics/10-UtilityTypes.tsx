export type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

export type UserProps = Omit<UserModel, "accountId">;

export type AlternateUserProps = Pick<UserModel, "displayName" | "isVerified">;

const CurrentUser = ({ accountId, displayName, isVerified }: UserProps) => {
  return (
    <header>
      <h2>
        {displayName} {isVerified && "✅"}
      </h2>
    </header>
  );
};

// We can create a type for props out of the prop type of another component
export type AnotherUserProps = React.ComponentProps<typeof CurrentUser>;
