import { usContext } from "../src/base-pruebas/06-deses-obj"

describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe retornat un objeto', () => { 
        const clave = '123456'; 
        const nombre = 'Guillo'; 
        const edad = '39'; 
        const rango = 'General';
        let testContext = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        
        const context = usContext({clave, nombre, edad, rango});

        expect( context ).toStrictEqual(testContext);
    })
    
})