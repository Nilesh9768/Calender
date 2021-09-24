
type eventsType = {
    id:number,
    entry:string,
    moveTo:string,
    category:string,
    date:Date,
    assignedBy:string
}
const eventsArray: eventsType[] = [
    {
        id:1,
        entry: 'Artificial Intelligence',
        moveTo: 'Publish',
        category: 'due-date',
        date: new Date('2021-09-20T09:00:00'),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:2,
        entry: 'ML',
        moveTo: 'Publish',
        category: 'content-publish',
        date: new Date('2021-09-21T12:00:00'),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:3,
        entry: 'DL',
        moveTo: 'Publish',
        category: 'due-date',
        date: new Date('2021-09-23T10:00:00'),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:4,
        entry: 'ML & DL',
        moveTo: 'Publish',
        category: 'release',
        date: new Date('2021-09-24T12:00:00'),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:5,
        entry: 'DSA',
        moveTo: 'Publish',
        category: 'release',
        date: new Date('2021-09-20T09:00:00'),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:6,
        entry: 'ML',
        moveTo: 'Publish',
        category: 'content-publish',
        date: new Date('2021-09-21T12:00:00'),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:7,
        entry: 'DL',
        moveTo: 'Publish',
        category: 'due-date',
        date: new Date('2021-09-23T11:00:00'),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:8,
        entry: 'ML & DL',
        moveTo: 'Publish',
        category: 'release',
        date: new Date('2021-09-24T10:00:00'),
        assignedBy:'Nilesh Yadav'
    }
]

export { eventsArray}
export type {eventsType}