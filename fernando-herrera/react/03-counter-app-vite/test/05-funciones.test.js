import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
  
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser(); //{ uid: 'ABC123', username: 'El_Papi1502' }
        
        //acá con objetos no puedes usar el toBe, se debe usar toEqual o toStrictEqual 
        expect( testUser ).toStrictEqual(user);

    });

    test('should getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Guillo';
        const testActiveUser = {
            uid: 'ABC567',
            username: name
        };

        const usuarioActivo = getUsuarioActivo(name);

        expect(usuarioActivo).toStrictEqual(testActiveUser); 
    });
    
})
