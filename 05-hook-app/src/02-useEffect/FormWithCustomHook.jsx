import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { userName, email, password, onInputChange } = useForm({
    userName: "",
    email: "",
    password: "",
  });

  //   const { userName, email, password } = formState;

  return (
    <div>
      <h1>Form With Custom Hook </h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="userName"
        value={userName}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="andres@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Your password here"
        name="password"
        value={password}
        onChange={onInputChange}
      />
    </div>
  );
};
