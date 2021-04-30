
export type StudentTypeHouse = 'apartment'| 'dormitory'| 'hostel'

type StudentUniversityType = {
    ispu : Array<'EEF'|'FEU'>,
    igma : Array<'Dent'|'Stom'>
}


type StudentType = {
    age: Number,
    house: Array<StudentTypeHouse>,
    salary: Number,
    city: Array< 'Ivanovo' | 'Moscow' >
     university: StudentUniversityType

}


export const Student: StudentType = {
    age: 17,
    university: {
        ispu : ['EEF','FEU'],
        igma : ['Dent','Stom']

    },
    house: [
        'apartment',
        'dormitory',
        'hostel'

    ],
    salary: 999,
    city: ['Ivanovo','Moscow'],
}