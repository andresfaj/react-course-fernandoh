import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Test on funciones", () => {
  test("getuSER DEBE retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe retonar", () => {
    const name = "Fernando";
    const user = getUsuarioActivo(name);

    expect(user).toEqual({ uid: "ABC567", username: name });
  });
});
