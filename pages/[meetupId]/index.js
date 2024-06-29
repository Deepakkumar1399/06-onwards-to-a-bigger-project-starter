
import MeetupDetail from '../../components/meetups/MeetupDetail.js';

function MeetupDetails(props) {
    return(
        <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description}/>
    )
}
export async function getStaticPaths(){
    return {
        fallback: false,
        paths:[
            { 
                params:{
                    meetupId: 'm1'
                } 
            },
            { 
                params:{
                    meetupId: 'm2'
                } 
            }
        ]
    }
}

export async function getStaticProps(context){
    //fetch data from an API
    const meetupId = context.params.meetupId;
    console.log(meetupId);
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