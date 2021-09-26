import {addDays} from 'date-fns'
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
        date: addDays(new Date().setHours(9,0,0),0),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:2,
        entry: 'ML',
        moveTo: 'Publish',
        category: 'content-publish',
        date: addDays(new Date().setHours(9,30,0),0),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:3,
        entry: 'DL',
        moveTo: 'Publish',
        category: 'content-publish',
        date: addDays(new Date().setHours(10,0,0),0),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:4,
        entry: 'ML & DL',
        moveTo: 'Publish',
        category: 'release',
        date: addDays(new Date().setHours(12,0,0),0),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:5,
        entry: 'DSA',
        moveTo: 'Publish',
        category: 'release',
        date: addDays(new Date().setHours(11,0,0),1),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:6,
        entry: 'ML',
        moveTo: 'Publish',
        category: 'content-publish',
        date: addDays(new Date().setHours(14,0,0),1),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:7,
        entry: 'DL',
        moveTo: 'Publish',
        category: 'due-date',
        date: addDays(new Date().setHours(10,0,0),2),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:8,
        entry: 'ML & DL',
        moveTo: 'Publish',
        category: 'release',
        date: addDays(new Date().setHours(11,30,0),3),
        assignedBy:'Nilesh Yadav'
    },{
        id:9,
        entry: 'DL',
        moveTo: 'Publish',
        category: 'due-date',
        date: addDays(new Date().setHours(15,0,0),3),
        assignedBy:'Nilesh Yadav'
    },
    {
        id:10,
        entry: 'ML & DL',
        moveTo: 'Publish',
        category: 'release',
        date: addDays(new Date().setHours(13,0,0),4),
        assignedBy:'Nilesh Yadav'
    }
]

export { eventsArray}
export type {eventsType}