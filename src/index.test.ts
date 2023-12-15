import {getMessage} from "./index";

describe('getMessage', () => {
    it('should return "Hello World!"', () => {
        expect(getMessage()).toEqual("Hello World!");
    });
});

// Path: src/index.ts

export const getMessage = () => "Hello World!";

// Path: tsconfig.json

{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true
    },
    "include": [
        "src/**/*"
    ]
}
```