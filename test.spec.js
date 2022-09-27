import { calc } from 'calculatrice.js'

describe('Calc Test', () => {
    it('must calculate number', () => {
        // Given
        const sampleCalc = 0;
        // When
        const result = calc.result;
        // Then
        expect(result).toBeDefined();
    })
})