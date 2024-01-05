import { retornaArreglo } from "../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {

    test('debe retornar cualquier string y cualquier número', () => {
        const [letters, numbers] = retornaArreglo();

        expect( typeof(letters) ).toBe('string');
        expect( typeof(numbers) ).toBe('number');

    })

    test('debe retornar los valores esperados', () => {
        const [letters, numbers] = retornaArreglo();
        
        expect ( letters ).toBe('ABC');
        expect ( numbers ).toBe(123);
    })
    
})
