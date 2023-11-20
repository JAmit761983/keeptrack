import {getMessage} from "./index";

describe('getMessage', () => {
    it('should return "Hello World!"', () => {
        expect(getMessage()).toEqual("Hello World!");
    });
});