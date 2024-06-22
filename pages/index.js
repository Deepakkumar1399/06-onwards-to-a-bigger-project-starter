import MeetupList from '../components/meetups/MeetupList.js';


const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title:'A First meetup Image',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address:'Some address 5, 12345 some city',
        description: 'Thid is a first meetup!'
    },
    {
        id: 'm2',
        title:'A Second meetup Image',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address:'Some address 5, 12345 some city',
        description: 'Thid is a second meetup!'
    },
]
export default function HomePage(){
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}