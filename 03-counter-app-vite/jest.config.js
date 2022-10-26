// Configuracion para hacer el fetch del Api, para que node pueda ejecutar el FETCH API

module.exports = {
  //TODO: jsdom
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
};
