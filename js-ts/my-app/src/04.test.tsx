import { Student } from "./04"

test('Student should have a 2 Universities', ()=> {
    //data
    let valueAge = Student.age
    let valueSalary = Student.salary
    let valueCities = Student.city[0]
    let valueUniversity = Student.university.ispu[0].toLowerCase()
    //action

    //result
    expect(valueAge).toBe(17)
    expect(valueSalary).toBe(999)
    expect(valueCities).toBe("Ivanovo")
    expect(valueUniversity).toBe('eef')
})