import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
