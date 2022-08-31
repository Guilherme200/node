module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["./tests"],
    transform: {"^.+\.(t|j)sx?$": ["@swc/jest"]},
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    globals: {
        "ts-jest": {
            tsConfig: {
                allowJs: true,
            },
        },
    },
};

