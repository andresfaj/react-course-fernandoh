import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe("Test on 09-promesas.js", () => {
  test("getHeroeByIdAsync should return a heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });

  test("getHeroeByIdAsync should return an error if the heroe doesn't exist", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      console.log({ error });

      expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

      done();
    });
  });
});
