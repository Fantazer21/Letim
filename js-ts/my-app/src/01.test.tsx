import {Multiply, Sum} from "./01";




test('Sum and multiply should be correct', ()  => {
    //data
    const a = 1
    const b = 2
    const d = 3
    const e = 4
    //action
    const res1 = Sum(a,b)
    const res2 = Sum(d,e)
    const res3 = Multiply(a,b)
    const res4 = Multiply(d,e)
    //result
    expect(res1).toBe(3)
    expect(res2).toBe(7)
    expect(res3).toBe(2)
    expect(res4).toBe(12)

})