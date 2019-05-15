import {sum} from './index'

describe('Fundamentos de Matemáticas', () => {

    it('Sumar', () => {
        expect(sum(1,2,3,4)).toBe(10)
    });
});