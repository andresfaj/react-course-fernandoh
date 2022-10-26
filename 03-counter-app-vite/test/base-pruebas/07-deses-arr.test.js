import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Test on 07-deses-arr", () => {
  test("should return a string and a number", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string"); //Para recibir cualquier tipo de string
    expect(letters).toEqual(expect.any(String)); //Para recibir cualquier tipo de string
  });
});
