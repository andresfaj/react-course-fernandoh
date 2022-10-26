//test('TITLE', CALLBACK)
/**
 * 1. inicializacion - Arrange
 * 2. Estimulo - Act
 * 3. Observar el comportamiento esperado - Assert
 */

describe("Pruebas <DemoComponent />", () => {
  test("This test doesnt failed", () => {
    const message1 = "Hola Mundo";
    const message2 = message1.trim();

    expect(message1).toBe(message2);
  });
});