
import MeetupDetail from '../../components/meetups/MeetupDetail.js';

function MeetupDetails(props) {
    return(
        <MeetupDetail image={props.image} title={props.title} address={props.address} description={props.description}/>
    )
}

export async function getStaticProps(context){
    //fetch data from an API
    const meetupId = context.params.meetupId;
    return{
        props:{
            meetupData : {
                image:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
                id: meetupId,
                title:"First Meetup" ,
                address:"Some Street 5, Some City",
                description:"This is a first meetup"
            }
        }
    }
}
export default MeetupDetails;