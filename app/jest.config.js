module.exports = {
  preset: "ts-jest",
  transform: {
    "node_modules/(react-dnd|react-dnd-html5-backend|dnd-core|@react-dnd)/.+\\.(j|t)sx?$":
      "ts-jest",
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    '^.+(\\.module)?\\.(css|scss)$': 'identity-obj-proxy',

  },
  transformIgnorePatterns: [
    `/node_modules/(?!(somePkg)|react-dnd|dnd-core|@react-dnd)`,
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
};
