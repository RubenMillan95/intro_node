
const sumar =require("./sumar");
//Reglas de jest
test('Probar suma de dos enteros',()=>{

    let resultado= sumar(3,5);
    expect(resultado).toBe(8);
}
   
);
test('Probar suma de dos reales',()=>{

    let resultado= sumar(3.01,5.8);
    expect(resultado).toBeCloseTo(8.81);
});

test('Probar suma de dos reales',()=>{

    let resultado= sumar(3.01,5.8);
    expect(resultado).toBeGreaterThan(8);
});

test('Probar suma de dos reales',()=>{

    let resultado= sumar(3.01,5.8);
    expect(resultado).toBeLessThan(10);
});