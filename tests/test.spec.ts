import {Test} from "../src/test";

describe('test', () => {
    it('should return a string hello world', () => {
        let test = new Test();
        expect(test.hello('test')).toBe('Hello test');
    });
});