import { types } from "../../../src/auth/types/types";

describe("Test on Types of auth folder", () => {
  test("should to return these types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
