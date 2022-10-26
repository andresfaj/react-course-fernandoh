import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Tests on 11-async-await.js", () => {
  test("getImagen should return an image url", async () => {
    const url = await getImagen();
    console.log({ url });

    expect(typeof url).toBe("string");
  });
});
