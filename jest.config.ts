const jestConfig = {
    displayName: {
        name: 'Jest:portfolio',
        color: 'yellow',
    },
    "setupFilesAfterEnv": ["<rootDir>/jest-setup.ts"],
    "moduleNameMapper": {
        "\\.(css|scss)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|pdf)$": "<rootDir>/jest/__mocks__/fileMock.ts"
    },
    "testEnvironment": "jsdom",
}

export default jestConfig;