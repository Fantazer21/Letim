



type UserType = {
    name: string,
    age: number,
    city: Array<string>
}

let user1 = {
    name: "Ilya",
    age: 32,
    city: ['Zagreb', 'Sarajevo']
}

let user2 = {
    name: "Sergey",
    age: 50,
    city: ['Moscow', 'Paris']
}


const users = [user1, user2]

const functionPush = (obj: UserType, value: string) => {
    let res = obj.name = value
    return res
}

const functionIncrease = (obj: UserType, value: number) => {
    let res = obj.age + value
    return res
}

const functionReplace = (obj: UserType, value: string) =>  {
    obj.city[0] = value
    return obj.city[0]
}

const functionCheckArray = (arr: Array<any>,ind: number) =>   {
    let res =  (arr[ind]).name
    return res
}

test("Functions should work", () => {

    // expect(functionPush(user1, 'Sergey')).toBe('Sergey')
    expect(functionIncrease(user1,5)).toBe(37)
    expect(functionReplace(user1, 'Moscow' )).toBe('Moscow')

    expect(functionCheckArray(users, 0)).toBe('Ilya')

})