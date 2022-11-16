import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>
        HomePage <small>{user?.name}</small>
      </h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-primary"
        onClick={() => setUser({ name: "Daniela Diaz" })}
      >
        Establecer Usuario
      </button>
    </>
  );
};
