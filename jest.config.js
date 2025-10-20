const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@methods/(.*)$': '<rootDir>/src/methods/$1'
  }
};