module.exports = {
  "transform": {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  "moduleNameMapper": {
    "@test/(.*)": "<rootDir>/test/$1",
    "@src/(.*)": "<rootDir>/src/$1"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!.*\\.mjs$|axios)/"
  ]
}
