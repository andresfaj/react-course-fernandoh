import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Test on 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeById debe retornar undefinend si no existe", () => {
    const id = 100;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
    expect(heroe).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar solo los de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    expect(heroes.length).toBe(3);
  });

  test("getHeroesByOwner debe retornar solo los de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes).toEqual([
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ]);
    expect(heroes.length).toBe(2);
  });
});
