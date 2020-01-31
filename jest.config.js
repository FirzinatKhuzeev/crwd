// eslint-disable-next-line no-undef
module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testPathIgnorePatterns: ['/node_modules/', '/__tests__/mock/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFiles: ['<rootDir>/src/setupTests.ts']
};
