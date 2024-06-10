import { defineConfig } from "cypress";
//import allureWriter from "@shelex/cypress-allure-plugin/writer";
//import { allureCypress } from "allure-cypress"

const { allureCypress } = require("allure-cypress/reporter");

export default defineConfig ({
  e2e: {
    supportFile: "./HW_24_cypress/cypress/support/e2e.ts",
    specPattern: "./HW_24_cypress/cypress/e2e/**/*.cy.ts",
    defaultCommandTimeout: 10000, // Таймаут по умолчанию для команд Cypress
    video: true,   // Настройки записи видео
    downloadsFolder: "./HW_24_cypress/cypress/downloads",
    screenshotsFolder: "./HW_24_cypress/cypress/screenshots",
    fixturesFolder: "./HW_24_cypress/cypress/fixtures",
    experimentalStudio: true,
    screenshotOnRunFailure: true,
    //videoUploadOnPasses: true, //Загружать видео даже при успешных тестах
    setupNodeEvents: (on, config) => {
      allureCypress(on, {
      resultsDir: "report/allure-result",
      });
      return config;
    }
  }
})
