import { createDefaultPreset } from 'ts-jest';

/** @type {import("jest").Config} **/
const tsJestTransformCfg = createDefaultPreset().transform;

export default {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@methods/(.*)$': '<rootDir>/src/methods/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
  },
};
